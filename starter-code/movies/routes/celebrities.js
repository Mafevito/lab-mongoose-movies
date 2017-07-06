/*jshint esversion: 6 */

const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, obj) => {
  if(err){
    console.log(err);
  }else{
    res.render('celebrities/index', {celebrities: obj});
  }
  });
});

router.get('/:id', function(req, res, next) {

  Celebrity.findById(req.params.id, (err, celeb) => {
    if(err){
      console.log(err);
    }
    res.render('celebrities/show', {
      celeb: celeb
    });
  });
});


module.exports = router;
