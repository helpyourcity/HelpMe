const express = require("express");
const Location = require("../models").Location;
const router = express.Router();

router.post("/map", function(req, res) {
  console.log("REQS", req.body);
  Location.create({
    lat: req.body.lat,
    lng: req.body.lng,
    user_id: req.body.user_id
  })
    .then(location => {
      console.log("locations", location);
      res.end();
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

//ger all users for the map
router.get("/users/location", function(req, res) {
  console.log;
  Location.findAll({
    order: [["createdAt", "DESC"]]
  }).then(location => {
    console.log("locats", location);
    res.send(location);
  });
});

//get users location  by ID
router.get("/users/location/id", function(req, res) {
  Location.findById(req.body.id, {
    order: [["createdAt", "DESC"]]
  }).then(location => {
    console.log("locats", location);
    res.send(location);
  });
});

router.put("/update", function(req, res) {
  console.log("++++", req.body);
  Location.update(
    {
      lat: req.body.lat,
      lng: req.body.lng
    },
    {
      where: {
        user_id: req.body.user_id
      }
    }
  ).then(user => {
    res.end();
  });
});
