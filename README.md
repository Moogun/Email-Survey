## How to test
1. live demo: https://node-react-dev.herokuapp.com

## The App's work flow
1. User signs up via Google OAuth `Express server + MongoDB + PassportJS`
2. User pays for email credits via stripe `Stripe + MongoDB`
3. User creates a new 'campaign' `React + Redux`
4. User enters list of emails to send survey to `React + Redux + Redux Form`
5. We send email to list of surveyees `Email Provider`
6. Surveyees click on link in email to provide feedback `Email Provider + Express + Mongo`
7. We tabulate feedback `MongoDB`
8. User can see report of all survey responses `Mongo + React + Redux`

## Client - Server Architecture
![dev-prod](dev-prod.png)

## OAuth Flow
![oAuth](oauth.png)

## Client Side Component Hierarchy
![client-components](client-components.png)

## DB Survey Schema

```
const surveySchema = new Schema({
     title: String,
     ...
     recipients: [RecipientSchema],
     ...
     _user: {type: Schema.Types.ObjectId, ref: 'User'},
     ...
});
```

## Sendgrid Email Flow
![sendgrid-flow](sendgrid-flow.png)

## Deployment

`Push to Github` -> `Push to CI` -> `CI Run tests and other tasks` -> ` CI deploy the code to Heroku` -> `Heroku builds the project`
