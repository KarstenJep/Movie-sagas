import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleButton = () => {
        console.log('Clicked Add Movie button');
        history.push('/addMovie');
    }

    const handleImg = (id) => {
        console.log('Clicked Image!!', id);
        dispatch({ type: 'GET_DETAILS', payload: id});

        history.push('/details')
    }

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