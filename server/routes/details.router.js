const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    console.log('req.body', req.query);
  const query = `SELECT movies.description, genres.name FROM movies
                  JOIN movies_genres ON movies.id = movies_genres.movie_id
                  JOIN genres ON movies_genres.genre_id = genres.id
                  WHERE movies.id = $1;`;
  pool.query(query, [req.query.id])
    .then( result => {
      console.log('result', result);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get DEETS', err);
      res.sendStatus(500)
    })
});


module.exports = router;