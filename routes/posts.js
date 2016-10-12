'use strict';

 const express = require('express');
 const router = express.Router();
 var knex = require('../knex');
 var bcrypt = require('bcrypt-as-promised');

router.get('/posts', function(req, res, next) {
  knex('users').orderBy('id').then(function(users) {
    knex('posts').orderBy('user_id').then(function(posts) {
      knex('comments').orderBy('post_id').then(function(comments) {
res.send(users, posts, comments);

        // res.render('index', {
        //   users: users,
        //   posts: posts,
        //   comment: comment
        // })
      })
    })
  })
})

 module.exports = router;
