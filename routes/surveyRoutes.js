const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

    const {title, subject, body, recipients} = req.body
    console.log(title, subject, body, recipients);
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({email: email})),
      _user: req.user.id,
      dateSent: Date.now()
    })


  })
}
