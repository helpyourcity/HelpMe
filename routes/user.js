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

function createToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
} // jwt have a sub property meaning subject is user id.

function signin(req, res, next) {
  console.log("SIGNIN USER REQ:", req.user);
  res.send({ token: tokenForUser(req.user) });
}

router.post("/signin", requireSignIn, signin);

// sign up *
router.post("/new", function(req, res) {
  bcrypt.genSalt(saltRounds).then(salt => {
    bcrypt.hash(req.body.password, salt).then(hash => {
      // Create new user w/ hashed password
      User.create({
        email: req.body.email,
        password: hash,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        active: true
      })
        .then(user => {
          res.end();
        })
        .catch(err => {
          // error in creating new user
          console.log(err);
        });
    });
  });
});

//gettin user by id for checking your profile
router.get("/users", requireAuth, function(req, res) {
  res.json({
    first_name: req.user.first_name,
    last_name: req.user.last_name
  });
});

//for users to edit their profiles.
router.put("/users/edit", requireAuth, function(req, res) {
  //this is to edit or (delete) users by id
  bcrypt.genSalt(saltRounds).then(salt => {
    bcrypt.hash(req.body.password, salt).then(hash => {
      User.update(
        {
          email: req.body.email,
          phone: req.body.phone,
          password: hash
        },
        {
          where: { id: req.user.id }
        }
      ).then(() => {
        return User.findById(req.user.id).then(user => {
          res.json({
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
          });
        });
      });
    });
  });
});

module.exports = router;
