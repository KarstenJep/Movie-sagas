const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET query to DB for all genres, sends back to saga
router.get('/', (req, res) => {
  const query = `SELECT * FROM genres ORDER BY "name" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;