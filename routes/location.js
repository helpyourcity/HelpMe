const express = require('express');
const router = express.Router();


const Location = require('../models').Location

router.post('/map', function (req, res) {
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
});

module.exports = router;