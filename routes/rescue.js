const express = require('express');
const router = express.Router();
const app = express();

const Rescue = require('../models').Rescue

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


router.put('/help_requests/:id/edit', function (req, res) {
    console.log("xxx",req.body)
    console.log("yyy", req.params.id)
    //this is to connect the helper to the helpee by rescue id
    // var rescueId = parseInt(req.params.id);
    Rescue.findById(req.params.id)
        .then((user) => {
            console.log("ddd", req.body)
            Rescue.update(req.body )
                .then(() => {
                    return Rescue.findAll()
                        .then((rescue) => {
                            res.json(rescue);
                        });
                });
        })
        .catch((err) => {
            console.log(err)
        })
});

module.exports = router;