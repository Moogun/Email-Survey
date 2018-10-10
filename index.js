const express = require('express');
require('./models/User')
require('./services/passport')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')

const keys = require('./config/keys')
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

const app = express();

app.get('/', (req, res) => {
 res.send({ hi: 'there' });
});

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('on port or 3000');
});
