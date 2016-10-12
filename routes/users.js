'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');



//shows all users
router.get('/users', function(req, res) {
    knex('users')
        .then((data) => {
        var myUsers = JSON.stringify(data)
        //later will res.render('users/usersindex', {username: data})
        res.send(myUsers);
    })
});


// displays all posts by individual user
router.get('/users/:user', function(req,res){
    var userId = req.params.user;
    //join table that includes posts made by users
    knex('users').innerJoin('posts', 'users.id', 'posts.user_id').then(function(data){
        // make an array of all the specific user's posts
        var thisUsersPosts =[];
        for(let i=0; i<data.length; i++){
            if(data[i].user_id == userId){
                thisUsersPosts.push(data[i])
            }
        }
        res.send(thisUsersPosts)
    })
})










module.exports = router;
