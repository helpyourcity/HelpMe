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
  res.send({
    token: tokenForUser(req.user),
    first_name: req.user.first_name
  });
}

router.post("/signin", requireSignIn, signin);

// sign up *
router.post("/new", function(req, res) {
  console.log(req.body);
  bcrypt.genSalt(saltRounds).then(salt => {
    bcrypt.hash(req.body.password, salt).then(hash => {
      // Create new user w/ hashed password
      User.create({
        email: req.body.email,
        password: hash,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        active: true,
        status: "user"
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

//this is for updating user location
router.put("/map", requireAuth, function(req, res) {
  console.log("REQS", req.user.id);
  User.update(
    {
      lat: req.body.lat,
      lng: req.body.lng
    },
    {
      where: {
        id: req.user.id
      }
    }
  )
    .then(location => {
      console.log("locations", location);
      res.end();
    })
    .catch(err => {
      console.log(err);
    });
});

//getting user by id for checking your profile
router.get("/getuser", requireAuth, function(req, res) {
  console.log("BACKEND GET USER", req);
  res.send({
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    phone: req.user.phone,
    status: req.user.status
  });
});

//for finding the three closest helpers
router.get("/helper", function(req, res) {
  console.log("BACKEND GET HELPER");
  User.findAll({
    where: {
      status: "helper"
    }
  }).then(helper => {
    console.log("user", req.user);
    res.send(helper);
  });
});

router.put("/users/edit", requireAuth, function(req, res) {
  console.log("checking status: ", req.body.status);
  User.update(
    {
      email: req.body.email,
      phone: req.body.phone,
      status: req.body.status
    },
    {
      where: {
        id: req.user.id
      }
    }
  ).then(user => {
    res.end();
  });
});

module.exports = router;
