const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const port = 1217;

//라우터 


app.use(express.json()); // = app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('div'));

app.use(
    cors({
        origin: "https://bookimacki.co.kr",
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    })
)

app.use(session({
    secret: '@bookimacki',
    resave: false,
    saveUninitialized: true,
    secure: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
      httpOnly: true,
      secure: true,
      sameSite : 'none',
    }
  }));

app.use(cookieParser('@bookimacki'));

app.get('/', (req, res) => {
    res.status(200).send('Success');
});
  
app.listen(port); 
module.exports = app;