import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css';
import Button from '@material-ui/core/Button';


function AddMovie() {

    // setting up useDispatch, useHistory, redux store
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    // setting up state to capture form values
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    // using useEffect to grab genre list sent from DB router GET
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // handler for 'Cancel' button
    const handleCancel = () => {
        // console.log('Clicked Add Movie button');
        // bring user back to movie list view
        history.push('/');
    }

    // handler for 'Save' button, dispatches form values to rootSaga
    const handleAdd = () => {
        event.preventDefault();
        // console.log('Adding a movie!', title, poster, description, genre);
        dispatch({
            type: 'ADD_MOVIE', payload: {
                title: title,
                poster: poster,
                description: description,
                genre_id: genre,
            }
        })
        // Clear Form
        setTitle('')
        setPoster('')
        setDescription('')
        setGenre('')
        // Bring user back to home view
        history.push('/')
    }

    // DOM render for add movie form
    return (
        <>
        <header>
            <h1>Add A Movie:</h1>
        </header>
        <form className="movieForm" onSubmit={handleAdd}>
            <input className="input" type="text" placeholder="Enter Title" value={title} 
                    onChange={(event) => setTitle(event.target.value)}/>
                    <br />
            <input className="input" type="text" placeholder="Enter URL" value={poster} 
                    onChange={(event) => setPoster(event.target.value)}/>
                    <br />
            <textarea className="text" name={description} rows="5" cols="40" placeholder="Add a Description"
                    onChange={(event) => setDescription(event.target.value)}></textarea>
                    <br />
            <select className="genres" onChange={(event) => setGenre(event.target.value)}>
                <option value="Default">Choose Category</option>
                {genres.map(genre => {
                    return (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    );
                })}
            </select>
            <br />
            <Button className="button" variant="outlined" color="primary" onClick={handleCancel}>Cancel</Button>
            {' '}
            <Button className="button" variant="contained" color="primary" type="submit">Save</Button>
        </form>
        </>
    )
}

export default AddMovie;
