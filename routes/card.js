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
    assignedTo: req.body.assignedTo,
  })
  .then(task =>{
    res.json(task);
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

router.route('/editstatus')
.put((req, res) =>{
  console.log('edkjowrijfaeiorjg', req.body);
  Card.update(
  {
    id: req.body.id,
   status: req.body.status
  },
  {
    where:{
      id: req.body.id
    }
  })
  .then(() =>{
    Card.findById(req.body.id)
    .then((card) =>{
      res.send(card);
    });
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