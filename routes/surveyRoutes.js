const _ = require('lodash');
const Path = require('path-parser').default
const { URL } = require('url');

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const template = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys')

module.exports = app => {

  app.get('/api/surveys/thanks', (req, res) => {
     res.send('Thanks for voting!');
   });
  app.post('/api/surveys/webhooks', (req, res) => {

    const events = _.map(req.body, (event) => {
      console.log('event ------', event);
      switch (event.event) {
        case 'delivered':
          console.log('11111');
          break;
        case 'click':
          console.log('22222', event.url);
          const p = new Path('/api/surveys/:surveyId/:choice');

          _.chain(req.body)
            .map((event) => {
              const match = p.test(new URL(event.url).pathname)
              if (match) {
                return { email: event.email, surveyId: match.surveyId, choice: match.choice }
              }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({email, choice, surveyId}) => {
              console.log('-------', email, choice, surveyId);
              Survey.updateOne({
                id: surveyId,
                recipients: {
                  $elemMatch: {email: email, responded: false }
                }
              },{
                $inc: {[choice]: 1},
                $set: {'recipients.$.responded': true}
              })
            })

          res.send({})
          break;
        case 'open':
          console.log('3333');
          break;
        default:
          console.log('0000');
      }
    })
  })

  app.post('/api/surveys',
   requireLogin, requireCredits,
   async (req, res) => {

    const {title, subject, body, recipients} = req.body
    console.log(title, subject, body, recipients);
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })

    const mailer = new Mailer(survey, template(survey))

    try {
      await mailer.send()
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422).send(err)
    }

  })
}
