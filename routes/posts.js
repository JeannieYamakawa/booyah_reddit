'use strict';

const express = require('express');
const router = express.Router({
    mergeParams: true
});
var knex = require('../knex');
var bcrypt = require('bcrypt-as-promised');

sdzd
    knex('users').where('id', req.params.user).then(function(user) {
      console.dir(req.params); next()
        knex('posts').where('user_id', req.params.user).then(function(posts) {
            knex('comments').orderBy('post_id', postIds).then(function(comments) {
                res.render('index', {
                    user: user[0],
                    posts: posts,
                    comments: comments
                })
            })
        })
    })
})

module.exports = router;
