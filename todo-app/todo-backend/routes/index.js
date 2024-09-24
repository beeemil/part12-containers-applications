const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const data = await redis.getAsync(key = 'added_todos')
  res.json({ 
    added_todos: Number(data) })
})

// testing developement
router.get('/joi', async (req, res) => {
  res.send('pöö')
})

module.exports = router;
