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
    // /api/surveys?pageNumber=2&pageSize=10
  app.get('/api/surveys', requireLogin, async (req, res) => {

    const {activePage, pageSize}  = req.query;
    const surveysToSkip = (parseInt(activePage) -1) * parseInt(pageSize);
    const surveysPerPage = parseInt(pageSize);
    // console.log('------------', surveysToSkip, surveysPerPage, activePage, pageSize);
    const surveys = Survey.find({_user: req.user.id})
        .sort({dateSent: -1})
        .skip(surveysToSkip)
        .limit(surveysPerPage)


    const count = Survey.find({_user: req.user.id}).countDocuments()
    Promise.all([surveys, count])
    .then((results) => {
        return res.send({
            page:results[0],
            count: results[1],
            chosenPage: parseInt(activePage)
        })
    }).catch((e) => {
        console.log(e);
    })
  })

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
     res.send('Thanks for voting!');
   });

  app.post('/api/surveys/webhooks', (req, res) => {

    const events = _.map(req.body, (event) => {
      console.log('event ------', event);
      switch (event.event) {
        case 'delivered':
          console.log('[event]: delivered');
          break;
        case 'click':
          console.log('[event]: ', event.url);
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
            .each(({surveyId, email, choice}) => {
              console.log('-------', email, choice, surveyId);
              Survey.updateOne({
                _id: surveyId,
                recipients: {
                  $elemMatch: {email: email, responded: false }
                }
              },{
                $inc: {[choice]: 1},
                $set: {'recipients.$.responded': true},
                lastResponded: new Date()
              }).exec()
            })
            .value()

          res.send({})
          break;
        case 'open':
          console.log('[event]: open');
          break;
        default:
          console.log('case default');
      }
    })
  })

  app.post('/api/surveys',
   requireLogin, requireCredits,
   async (req, res) => {

    const {title, subject, body, recipients} = req.body
    console.log('[/api/surveys] - post', title, subject, body, recipients);
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
