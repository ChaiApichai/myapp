var express = require('express');
var router = express.Router();
var index = require('../models/index_model');


/* GET home page. */
router.get('/', function(req, res, next) {
  index.find().limit(1).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
    // res.render('index', { title: 'Express' });
  })
});

module.exports = router;
