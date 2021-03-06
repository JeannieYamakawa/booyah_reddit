'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const knex = require('./knex');

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');
const methodOverride = require('method-override');


const ejs = require('ejs');
// Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
  name: 'booyah_reddit',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use(methodOverride('_method'));

//use as second argument whenever a user needs to be authenticated and logged in to view
const checkAuth = function(req, res, next) {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  next();
}

app.get('/', function(req, res, next) {
  let session = req.session;
    knex('users')
        .then(function(users) {
          console.log(users);
            knex('posts').orderBy('id')
                .then(function(posts) {
                    res.render('index', {
                        user: users,
                        posts: posts,
                        comments: comments,
                        session: session
                    })
                })
        })
});

// Declare routes variables
const users = require('./routes/users');
const token = require('./routes/token');
const posts = require('./routes/posts');
const comments = require('./routes/comments')

// Assign Routes to Server
app.use(users);
app.use(token);
app.use('/users/:user', posts);
app.use(comments);



const port = process.env.PORT || 3000;
// Server Listener
app.listen(port, function() {
    console.log('listening on port: ' + port);
});

module.exports = app;




// SET SESSION SECRET
// bash -c 'echo "SESSION_SECRET="$(openssl rand -hex 64)' >> .env
