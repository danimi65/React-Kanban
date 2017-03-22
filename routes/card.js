//jshint esversion:6
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;



router.route('/')
.get((req, res) =>{
  Card.findAll()
  .then(cards =>{
    res.json({cardList:{cards}});

  });
})
.post((req, res) =>{
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status
  })
  .then((task) =>{
    res.send('congrats you posted');
  });
});


router.route('/:id/edit')
.put((req, res) =>{
  Card.update(
  {
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status
  },
  {
    where:{
      id: req.params.id
    }
  })
  .then((task) =>{
    res.send('put done');
  });
});

router.route('/:id')
.delete((req, res) =>{
  Card.destroy(
  {
    where:{
      id: req.params.id
    }
  })
  .then((task)=>{
    res.send('deleted done');
  });
});




module.exports = router;