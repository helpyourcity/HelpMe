const express = require('express');
const router = express.Router();
const app = express();

const User = require('../models').User


//login
router.get('/login', function (req, res) {
  //this is to login this will be what sends token to API through OAuth
});

//sign up
router.post('/new', function (req, res) {
  console.log('are we posting??', req.body)
  User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
      phone: req.body.phone,
      active: req.body.active
    })
    .then((user) => {
            console.log('server user to send +++', user.id)
              res.json(user.id);
          })
  .catch((err) => {
      console.log(err)
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