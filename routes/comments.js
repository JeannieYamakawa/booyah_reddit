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
  knex('comments').update({comment_id: comment.comment_id, user_id: comment.user_id}).then(function(){
    res.redirect("redirect to post page");
  });
});










module.exports = router;
