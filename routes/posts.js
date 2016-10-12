'use strict';

const express = require('express');
const router = express.Router({
    mergeParams: true
});
var knex = require('../knex');
var bcrypt = require('bcrypt-as-promised');

router.get('/posts', function(req, res, next) {
    knex('users').where('id', req.params.user)
        .then(function(user) {
            knex('posts').where('user_id', req.params.user)
                .then(function(posts) {
                    knex('comments').orderBy('post_id')
                        .then(function(comments) {
                            res.render('index', {
                                user: user[0],
                                posts: posts,
                                comments: comments
                            })
                        })
                })
        })
});

router.get('/posts/:post', function(req, res, next) {
    knex('users').where('id', req.params.user)
        .then(function(user) {
            knex('posts').where('id', req.params.post)
                .then(function(post) {
                    knex('comments').where('post_id', req.params.post)
                        .then(function(comments) {
                            res.render('single-post', {
                                user: user,
                                post: post,
                                comments: comments
                            })
                        })
                })
        })
});

router.get('/posts/:post/edit', function(req, res, next) {
    knex('users').where('id', req.params.user)
        .then(function(user) {
            knex('posts').where('id', req.params.post)
                .then(function(post) {
                    res.render('post-edit', {
                        user: user,
                        post: post
                    })
                })
        })
});

router.get('/posts/new', function(req, res, next) {
    knex('users').where('id', req.params.user)
        .then(function(user) {
            res.render('new-post', {
                user: user
            })
        })
});

router.get('/posts/:post/delete', function(req, res, next) {
    knex('users').where('id', req.params.user)
        .then(function(user) {
            knex('posts').where('id', req.params.post)
                .then(function(post) {
                    res.render('delete', {
                        user: user,
                        post: post
                    })
                })
        })
});

router.post('/posts', function(req, res, next) {
    console.log(req.body);
    knex('posts').insert({
        title: req.body.title,
        body: req.body.content,
        link: req.body.link
    }).then(function() {
      res.redirect('/posts');
    })

});

router.patch('/posts/:post', function(req, res, next) {
    console.log(req.body);
    knex('posts').update({
        title: req.body.title,
        body: req.body.content,
        link: req.body.link
    }).then(function() {
      res.redirect('/posts');
    })

});

router.delete('/posts/:post', function(req, res, next) {
  knex('posts').where('id', req.params.post).del();
  res.redirect('/posts');
});


module.exports = router;
