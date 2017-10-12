const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./models');


const server = app.listen(PORT, () =>{
  db.sequelize.sync()
  console.log(`helpme running on ${PORT}`)
})
