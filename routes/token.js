'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const methodOverride = require('method-override');

//Handles login and authentication
router.post('/token', function (req, res) {
  knex('users').where('username', req.body.username).first().then(function (user) {
    if (!user) {
      res.redirect('back');
    };

    bcrypt.compare(req.body.password, user.hashed_password)
      .then(function () {
        console.log('worked');
        req.session.user = user;
        res.cookie('loggedIn', true);
        res.redirect('/');
      }, function () {
        console.log('failed');
        res.redirect('back');
      });
  });
});

//Handles user registration
router.post('/signup', function(req, res) {
    bcrypt.hash(req.body.password, 10).then((hashpw) => {
        console.log(hashpw);
        knex('users').insert({
            username: req.body.username, hashed_password: hashpw
        }).then((user) => {
            console.log(user);
            res.redirect('/login.html');
        })

    })

});

//handles logout users
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('loggedIn');
    //redirect to the login page
    res.redirect('/login.html');
});

module.exports = router;
