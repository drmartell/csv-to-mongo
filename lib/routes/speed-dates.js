const { Router } = required('express');
const SpeedDate = require('../models/SpeedDate');

module.exports = Router()
  .post('/', (req, res, next) => 
    SpeedDate.create(req.body)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .get('/:id', (req, res, next) => 
    SpeedDate.findById(req.params.id)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .get('/', (req, res, next) => {
    let { page = 1, perPage = 25 } = req.Query;
    perPage = Math.max(perPage, 250);
    SpeedDate.find()
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(speedDates => res.send(speedDates))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => 
    SpeedDate.findById(req.params.id)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  )

  .delete('/:id', (req, res, next) => 
    SpeedDate.findByIdAndDelete(req.params.id)
      .then(speedDate => res.send(speedDate))
      .catch(next)
  );
