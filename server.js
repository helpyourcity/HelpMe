const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;

const db = require('./models');
const bp = require('body-parser');




const location = require('./routes/location.js');
const message = require('./routes/message.js');
const rescue = require('./routes/rescue.js');
const user = require('./routes/user.js');

app.use(bp.urlencoded());
app.use(express.static('public'));

app.use('/api/location', location);
app.use('/api/message', message);
app.use('/api/rescue', rescue);
app.use('/api/user', user);





// I dont think we need this, make a case for that
// this is for getting help requests.
// app.get('/api/help_requests', function (req, res) {

// })



const server = app.listen(PORT, () => {
  db.sequelize.sync()
  console.log(`helpme running on ${PORT}`)
})










