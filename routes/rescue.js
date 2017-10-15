const express = require('express');
const router = express.Router();
const app = express();

const Rescue = require('../models').Rescue

router.post('/help_requests', function (req, res) {
    console.log('are we posting resque??', req.body)
    Rescue.create({
            helper_id: req.body.helper_id,
            helpee_id: req.body.helpee_id,
            // time_start: req.body.time_start,
            // time_closed: req.body.time_closed,
            // reason_ended: req.body.reason_ended,
        })
        .then((rescue) => {
            return Rescue.findAll({
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


router.put('/help_requests/:id', function (req, res) {
    //this is to connect the helper to the helpee by rescue id
    console.log("console logging", req.body)
    var rescueId = parseInt(parseInt(req.params.id));
    Rescue.update({
      helper_id: req.body.helper_id,
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((data) =>{
      console.log('success');
      return Rescue.findById(data.id)
        .then((rescue) =>{
          res.json(rescue);
        });
    })
    .catch(() =>{
      console.log('fail');
    });
    });



//     Rescue.findById(req.params.id)
//         .then((user) => {
//             Rescue.update({
//                     where:
//                         {helper_id: req.body.helper_id}
//                 })
//                 .then(() => {
//                     return Rescue.findAll()
//                         .then((rescue) => {
//                             res.json(rescue);
//                         });
//                 });
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

module.exports = router;