import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {
    // setting up useDispatch, useHistory, redux store
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // using useEffect to grab movies from DB
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // handle for for 'Add movie' button
    const handleButton = () => {
        // console.log('Clicked Add Movie button');
        // bring user to 'Add Movie' view
        history.push('/addMovie');
    }

    // handle for clicking on a movie, captures movie id and dispatches to rootSaga, 
    const handleImg = (id) => {
        // console.log('Clicked Image!!', id);
        dispatch({ type: 'GET_DETAILS', payload: id});
        // bring user to 'Movie Details' view
        history.push('/details')
    }

    // DOM render using .map
    return (
        <main>
            <h1>MovieList</h1>
            <button className="button" onClick={handleButton}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleImg(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;