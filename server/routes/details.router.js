const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    console.log('req.query', req.query, req.body);
  const query = `SELECT movies.title, movies.description, ARRAY_AGG(genres.name) as genres, movies.poster FROM movies
                    JOIN movies_genres ON movies.id = movies_genres.movie_id
                    JOIN genres ON movies_genres.genre_id = genres.id
                    WHERE movies.id = $1 
                    GROUP BY movies.title, movies.description, movies.poster;`;
  pool.query(query, [req.query.id]) // should be [req.params.id], why not?
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