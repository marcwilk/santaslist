var express = require('express')
var router = express.Router()
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
  .then((data) => {
    res.send(data)
  })
})

router.get('/:id', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .first()
  .then((data) => {
    res.send(data)
  })
})

module.exports = router
