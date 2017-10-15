const express = require('express');
const router = express.Router();


const Message = require('../models').Message

//posting chat
router.post('/chat', function (req, res) {
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

module.exports = router;