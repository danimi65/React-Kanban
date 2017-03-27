//jshint esversion:6
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;



router.route('/')
.get((req, res) =>{
  Card.findAll({

  })
  .then((cards) =>{
    res.send(cards);
  });
})
.post((req, res) =>{
  console.log(req.body, 'req.body');
    Card.create({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  })
  .then((task) =>{
    res.send('congrats you posted');
  });
});

router.route('/todo')
.get((req, res) =>{
  Card.findAll({
    where:{
      status: 'to do'
    }
  })
  .then((cards) =>{
   res.json(cards);
  });
});

router.route('/current')
.get((req, res) =>{
  Card.findAll({
    where:{
      status: 'current'
    }
  })
  .then((cards) =>{
    res.json(cards);
    
  });
});

router.route('/completed')
.get((req, res) =>{
  Card.findAll({
    where:{
      status: 'completed'
    }
  })
  .then((cards) =>{
    res.json(cards);
    
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