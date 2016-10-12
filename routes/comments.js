'use strict';


const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const methodOverride = require('method-override');

router.post('/users/:user_id/posts/:post_id/comment', function(req, res){
  var comment = req.body;
  knex('comments').insert({comment_id: comment.comment_id, user_id: comment.user_id}).then(function(){
    res.redirect("redirect to post page");
  });
});

router.patch('/users/:user_id/posts/:post_id/comment', function(req, res){
  var comment = req.body;
  knex('comments').where('id', req.body.comment_id).update({comment_id: comment.comment_id, user_id: comment.user_id}).then(function(){
    res.redirect("redirect to post page");
  });
});

router.delete('/users/:user_id/posts/:post_id/comment', function (res, req) {
  knex('comments').where('id', req.body.comment_id).del().then(function () {
    res.redirect('back');
  });
});

module.exports = router;
