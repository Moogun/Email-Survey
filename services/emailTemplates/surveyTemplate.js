const keys = require('../../config/keys');

module.exports = (survey) => {
  console.log('survey', survey);
  return `
  <html>
    <body>
      <div>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
        </div>
        <div>This is an email sent from 'Email-Survey Project https://github.com/Moogun/Email-Survey'</div>
      </div>
    </body>
  </html>
  `
}
