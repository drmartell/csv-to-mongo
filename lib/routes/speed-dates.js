const { Router } = require('express');
const SpeedDate = require('../models/SpeedDate');

module.exports = Router()
  .post('/query', (req, res, next) => {
    let { page = 1, perPage = 25 } = req.query;
    perPage = Math.min(perPage, 250);
    SpeedDate.getByMQL(req.body)
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(result => res.send(result))
      .catch(next);
  })

  .post('/', (req, res, next) => 
    SpeedDate.create(req.body)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .get('/females', (req, res, next) => {
    let { page = 1, perPage = 25 } = req.query;
    perPage = Math.min(perPage, 250); 
    SpeedDate.getFemales()
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(females => res.send(females))
      .catch(next);
  })

  .get('/males', (req, res, next) => {
    let { page = 1, perPage = 25 } = req.query;
    perPage = Math.min(perPage, 250); 
    SpeedDate.getMales()
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(females => res.send(females))
      .catch(next);
  })

  .get('/:id', (req, res, next) => 
    SpeedDate.findById(req.params.id)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .get('/', (req, res, next) => {
    let { page = 1, perPage = 25 } = req.query;
    perPage = Math.min(perPage, 250);
    SpeedDate.find()
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(speedDates => res.send(speedDates))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => 
    SpeedDate.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .delete('/:id', (req, res, next) => 
    SpeedDate.findByIdAndDelete(req.params.id)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  );
