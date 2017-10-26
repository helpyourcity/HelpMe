const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models").User;
const jwt = require("jwt-simple");
const config = require("../config/config.json");
const saltRounds = 10;

const passportService = require("../services/passport.js");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
} // jwt have a sub property meaning subject is user id.

function signin(req, res, next) {
  console.log("SIGNIN USER REQ:", req.user);
  res.send({ token: tokenForUser(req.user) });
}

//login
router.get("/", requireAuth, function(req, res) {
  console.log("we gettin anything?");
  res.send({ hi: "there" });
  //this will be  sent if token to API goes through OAuth
});

router.post("/signin", requireSignIn, signin);

// sign up
router.post("/new", function(req, res) {
  bcrypt.genSalt(saltRounds)
    .then(salt => {
      bcrypt.hash(req.body.password, salt)
        .then(hash => {
          // Create new user w/ hashed password
          User.create({
            email: req.body.email,
            password: hash,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            active: req.body.active
          })
            .then(user => { // new user successfully created
              res.json({
                token: tokenForUser(user)
              });
            })
            .catch(err => { // error in creating new user
              console.log(err);
            });
        });
    });
});

//gettin user by id for checking your profile
router.get("/users/:id", function(req, res) {
  let userId = parseInt(req.params.id);
  User.findById(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

//for users to edit their profiles.
router.put("/users/:id/edit", function(req, res) {
  //this is to edit or (delete) users by id
  var userId = parseInt(req.params.id);
  User.findById(userId).then(user => {
    User.update(req.body).then(() => {
      return User.findAll().then(user => {
        res.json(user);
      });
    });
  });
});

module.exports = router;
