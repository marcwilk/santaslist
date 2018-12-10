var express = require('express')
var router = express.Router()
var knex = require('../knex')

router.get('/', function(req, res, next) {
  knex('users')
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

router.get('/:id', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .first()
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

router.post('/', function(req, res, next) {
  knex('users')
  .insert(req.body, '*')
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

router.patch('/:id', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .update(req.body)
  .returning('*')
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

router.delete('/:id', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .first()
  .returning('*')
  .del()
  .then((data) => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

module.exports = router
