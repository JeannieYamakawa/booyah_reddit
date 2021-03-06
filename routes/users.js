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


//Handles user registration
router.post('/users', function(req, res) {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10).then((hashpw) => {
        console.log(hashpw);
        knex('users').insert({
            username: req.body.username,
            hashed_password: hashpw
        }).then((user) => {
            res.send(user);
            // res.redirect('/users');
        });
    });
});

// displays all posts by individual user
router.get('/users/:user', function(req,res){
    var userId = req.params.user;
    var thisUsersPosts =[];
    var thisUsersComments=[];
    var userName;
    //join table that includes posts made by users
    knex('users').innerJoin('posts', 'users.id', 'posts.user_id').then(function(data){
        // make an array of all the specific user's posts
        for(let i=0; i<data.length; i++){
            if(data[i].user_id == userId){
                thisUsersPosts.push(data[i])
            }
        }
        userName =  thisUsersPosts[0].username;

        //needs EJS page...EJS page also includes button to edit user
        // res.send(userName);
    })
    .then(knex('users').innerJoin('comments', 'users.id', 'comments.user_id').then(function(data2){
        for (let j=0; j<data2.length; j++){
            if(data2[j].user_id == userId){
                thisUsersComments.push(data2[j])
            }
        }

        res.render('users/user', {thisUsersPosts:thisUsersPosts, thisUsersComments: thisUsersComments, userName: userName})

    })

)
})

// PATCH /users/:user
// action for edit user info form\
router.patch('/users/:user', function(req,res){
    //make sure the person who's logged in is the one whose info is going to be edited
    //grab the existing user's info from the database.

    var userId = req.params.user;
    var wholeUser = req.body;
    var usernameToChange = wholeUser.username;
    if (userId = req.session.user.id){
        bcrypt.hash(req.body.password, 10).then(function(hashpw){
            knex('users').update({
                username: usernameToChange,
                hashed_password: hashpw
            })
            .then(function(){
                res.send('we need an EJS page for this!')
            })
        })
}else{
    res.sendStatus(401);
}
})



//page with form for editing user information
router.get('/users/:user/edit',function(req,res){
    var userRequestingEdit = req.params.user;
    var userLoggedIn = req.session.user.username;
    if (userRequestingEdit = userLoggedIn){
    knex('users').where('id', userLoggedIn)
        .then(function(data){
            res.send(data)
            //NEED TO DISPLAY EJS PAGE WITH FORM.
        })
    } else{
    res.sendStatus(401);
    }
})

//delete individual user
router.delete('/users/:user', function(req,res) {
    var userToDelete = req.session.user.id;
    knex('users').where('id', userToDelete).del()
    .then(function(){
        res.redirect('/users')
        })
});







module.exports = router;
