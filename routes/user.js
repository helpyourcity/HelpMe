const express = require('express');
const router = express.Router();
const app = express();
const bcrypt = require('bcrypt');
const User = require('../models').User
const jwt = require('jwt-simple');
const config = require('../config/config.json')
const saltRounds = 10;

function tokenForUser(user) { 
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.idm, iat: timestamp}, config.secret)
}// jwt have a sub property meaning subject is user id. 


//login
router.get('/login', function (req, res) {
  //this is to login this will be what sends token to API through OAuth
});

//sign up
router.post('/new', function (req, res) {
  console.log('are we posting user data??', req.body)
  bcrypt.genSalt(saltRounds)
  .then( salt => {
    bcrypt.hash(req.body.password, salt)
      .then( hash => {
  User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      active: req.body.active
    })
  
    .then((user) => {
            console.log('server user to send +++', user.id)
              res.json({ token: tokenForUser(user)});
          })
  .catch((err) => {
      console.log(err)
  })
})
})
})




//gettin user by id for checking your profile
router.get('/users/:id', function (req, res) {
  let userId = parseInt(req.params.id)
  User.findById(userId)
    .then((user) => {
      res.json(user)
    }).catch((err) => {
      console.log(err)
    })
});

//for users to edit their profiles. 
router.put('/users/:id/edit', function (req, res) {
  //this is to edit or (delete) users by id
  var userId = parseInt(req.params.id);
  User.findById(userId)
    .then((user) => {
      User.update(req.body)
        .then(() => {
          return User.findAll()
            .then((user) => {
              res.json(user);
            });
        });
    });
});

module.exports = router;