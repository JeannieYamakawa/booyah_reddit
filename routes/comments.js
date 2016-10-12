'use strict';


const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const methodOverride = require('method-override');

router.delete('/users/:user_id/posts/:post_id/comment', function (res, req) {
  knex('comments').where('id', req.body.comment_id).del().then(function () {
    res.redirect('back');
  });
});












module.exports = router;
