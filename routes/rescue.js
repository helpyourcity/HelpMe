const express = require("express");
const router = express.Router();
const app = express();
// const config = require(`./config/${process.env.NODE_ENV}.js`)
const Rescue = require("../models").Rescue;
const User = require("../models").User;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('helpme', 'basic_user', null, {dialect: 'postgres'});

const passportService = require("../services/passport.js");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

const {
  ACCOUNT_SID,
  AUTH_TOKEN,
  ADMINS,
  RESCUERS,
  API_KEY
} = require("../config/sms");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

router.post("/sms/rescue", requireAuth, (req, res) => {
  console.log("helpee and location", req.body);
  let location = req.body.coordinates;

console.log('COOR', req.body.coordinates)
  //console.log("client", client);
  for (let i = 0; i < 2; i++) {
    console.log("TESTING!")
    client.messages
      .create({
        to: "+1"+ req.body.phoneNumber, // to req.body.helperNumber[i]
        from: "+18082014699",
        body: `Emergency Message from ${req.user.first_name} phone number:${req.body.phoneNumber} :${req.body.title} `
      })

      .then(message => {
         client.messages.create({
        to: "+1"+ req.body.phoneNumber,
        from: "+18082014699",
        body: `This is their location https://www.google.com/maps/search/?api=1&query=${req.body.coordinates}`
      })
      });
      console.log("ENDING?")
    res.end();
  }
});

router.post("/help_requests", function(req, res) {
  console.log("are we posting resque??", req.body);
  Rescue.create({
    helper_id: req.body.helper_id,
    helpee_id: req.body.helpee_id,
    time_start: req.body.time_start,
    time_closed: req.body.time_closed,
    reason_ended: req.body.reason_ended
  })
    .then(rescue => {
      return Rescue.findAll({
        order: [["time_start", "DESC"]],
        limit: 1,
        where: {
          helper_id: req.params.helper_id
        }
      }).then(rescue => {
        res.json(rescue);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/help_requests/:id", function(req, res) {
  //this is to connect the helper to the helpee by rescue id
  console.log("console logging", req.body);
  var rescueId = parseInt(parseInt(req.params.id));
  Rescue.update(
    {
      helper_id: req.body.helper_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(data => {
      console.log("success");
      return Rescue.findById(data.id).then(rescue => {
        res.json(rescue);
      });
    })
    .catch(() => {
      console.log("fail");
    });
});

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function compareLocation(user){
    console.log('comparing location', user)
    //sequelize.query("SELECT 'phone', 'lat', 'lng' FROM User", { type: sequelize.QueryTypes.SELECT})
    //sequelize.query('SELECT * FROM User', { type: sequelize.QueryTypes.SELECT})
    User.findAll({
      attributes: ['phone', 'lat', 'lng']
    })
        .then(data => {
        //console.log('data is', data)
        //users is an array of phone,lat,lon
        let distances = []
        for (let val of data){
            console.log(user.location.lat + ' ' +user.location.lon + ' '+ val.dataValues.lat+ ' '+ val.dataValues.lng)
            let temp = distance(user.location.lat, user.location.lon, val.dataValues.lat, val.dataValues.lng)
            distances.push([temp, val.dataValues.phone])
            console.log('val of data is', val.dataValues.lat + ' ' + val.dataValues.lng)

        }
        distances.sort()//might be lucky and it'll work
        console.log('distances ::::::::::::', distances);
        return distances;
    })
}

let james = {'phone': '8319150199',
'location': {
    'lat': '21.3069',
    'lon': '157.8583'
}};
console.log('james is==============================', james)

compareLocation(james)

module.exports = router;
