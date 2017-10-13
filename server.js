const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./models');
const bp = require('body-parser');
const User = require('./models').User
const router = express.Router();

app.use(bp.urlencoded());
const server = app.listen(PORT, () =>{
  db.sequelize.sync()
  console.log(`helpme running on ${PORT}`)
})

//sign up
app.post('/api/new', function(req,res) {
  console.log('are we posting??', req.body)
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    phone: req.body.phone,
    active: req.body.active
  }).then(users =>{
    res.end()
  }).catch(err => {
    console.log(err)
  });
});

app.post('/api/chat', function(req,res){
  //this is post for chat
});

router
.get('/api/help_requests', function(req,res){
  //this is for getting help requests. 
})
.post('/api/help_requests', function(req,res){
  //this is for creating help requests
});

app.get('/api/users/login', function(req,res){
  //this is to login this will be what sends token to API through OAuth
});

app.get('/api/users/:id', function(req,res){
  //this is to get users by id
});


app.put('/api/users/:id/edit', function(req,res){
  //this is to edit or (delete) users by id
});

app.put('/api/help_requests/:id', function(req,res){
  //this is to connect the helper to the helpee by rescue id
});
