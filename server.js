const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./models');
const bp = require('body-parser');
const User = require('./models').User
const Message = require('./models').Message
const Rescue = require('./models').Rescue
const Location = require('./models').Location
const router = express.Router();

app.use(bp.urlencoded());
const server = app.listen(PORT, () => {
  db.sequelize.sync()
  console.log(`helpme running on ${PORT}`)
})

//sign up
app.post('/api/new', function (req, res) {
  console.log('are we posting??', req.body)
  User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
      phone: req.body.phone,
      active: req.body.active
    })
    .then(users => {
      res.end()
    })
    .catch(err => {
      console.log(err)
    });
});

//posting chat
app.post('/api/chat', function (req, res) {
  Message.create({
      body: req.body.body,
      sender: req.body.sender
    })
    .then((message) => {
      return Message.findAll({
          'order': [
            ['updatedAt', 'DESC']
          ],
          limit: 1
        })
        .then((message) => {
          res.json(message);
        });
    })
    .catch((err) => {
      console.log(err)
    })
});

// I dont think we need this make a case for that
app.get('/api/help_requests', function (req, res) {
  //this is for getting help requests. 
  //
})

app.post('/api/help_requests', function (req, res) {
  console.log('are we posting resque??', req.body)
  Rescue.create({
      helper_id: req.body.helper_id,
      helpee_id: req.body.helpee_id,
      time_start: req.body.time_start,
      time_closed: req.body.time_closed,
      reason_ended: req.body.reason_ended,
    })
    .then((rescue) => {
      return Message.findAll({
          'order': [
            ['time_start', 'DESC']
          ],
          limit: 1,
          where: {
            helper_id: req.params.helper_id
          }
        })
        .then((rescue) => {
          res.json(rescue);
        });
    })
    .catch((err) => {
      console.log(err)
    })
});

app.post('/api/map', function (req,res){
    Location.create({
      house_number: req.body.house_number,
      street: req.body.street,
      unit: req.body.unit,
      apt_num: req.body.apt_num,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      geo_point: req.body.geo_point
    })
    .then(location => {
      res.end()
    })
    .catch(err => {
      console.log(err)
    });
})
app.get('/api/users/login', function (req, res) {
  //this is to login this will be what sends token to API through OAuth
});

app.get('/api/users/:id', function (req, res) {
  let userId = parseInt(req.params.id)
  User.findById(userId)
    .then((user) => {
      res.json(user)
    }).catch((err) => {
      console.log(err)
    })
});


app.put('/api/users/:id/edit', function (req, res) {
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

app.put('/api/help_requests/:id', function (req, res) {
  //this is to connect the helper to the helpee by rescue id
  var rescueId = parseInt(req.params.id);
  Rescue.findById(rescueId)
    .then((user) => {
      Rescue.update({
        helpee_id:req.body.helpee_id
      })
        .then(() => {
          return Rescue.findAll()
            .then((rescue) => {
              res.json(rescue);
            });
        });
    });
});

