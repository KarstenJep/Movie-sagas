import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function AddMovie() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const genres = useSelector(store => store.genres);

    console.log('in AM genres', genres);
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const handleCancel = () => {
        console.log('Clicked Add Movie button');
        history.push('/');
    }

    const handleAdd = () => {
        event.preventDefault();
        console.log('Adding a movie!', title, poster, description, category);
        dispatch({
            type: 'ADD_MOVIE', payload: {
                title: title,
                poster: poster,
                description: description,
                genre_id: category,
            }
        })
        // Clear Form
        setTitle('')
        setPoster('')
        setDescription('')
        setCategory('')
        // Bring user back to home view
        history.push('/')
    }

    return (
        <>
        <button className="button" onClick={handleCancel}>Cancel</button>
        <h2>Add A Movie:</h2>
        <form className="movieForm" onSubmit={handleAdd}>
            <input className="input" type="text" placeholder="Enter Title" value={title} 
                    onChange={(event) => setTitle(event.target.value)}/>
            <input className="input" type="text" placeholder="Enter URL" value={poster} 
                    onChange={(event) => setPoster(event.target.value)}/>
            <textarea name={description} rows="3" cols="40" placeholder="Add a Description"
                    onChange={(event) => setDescription(event.target.value)}></textarea>
            <select className="genres" onChange={(event) => setCategory(event.target.value)}>
                <option value="Default">Choose Category</option>
                {genres.map(genre => {
                    return (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    );
                })}
            </select>
            <button className="button" type="submit">Save</button>
        </form>
        </>
    )
}

export default AddMovie;

{/* <img src={movie.poster} alt={movie.title} onClick={() => handleImg(movie.id)}/> */}

{/* <select className="select" onChange={(event) => setCategory(event.target.value)}>
                    <option value="Default">Choose Category</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select> */}