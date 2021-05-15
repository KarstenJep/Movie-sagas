import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function AddMovie() {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    const handleCancel = () => {
        console.log('Clicked Add Movie button');
        history.push('/');
    }

    const handleAdd = () => {
        event.preventDefault();
        console.log('Adding a movie!', title, url, description, category);
        dispatch({
            type: 'ADD_MOVIE', payload: {
                title: title,
                url: url,
                description: description,
                category: category,
            }
        })
        // Clear Form
        setTitle('')
        setUrl('')
        setDescription('')
        setCategory('')
        // Bring user back to home view
        // history.push('/')
    }

    return (
        <>
        <button className="button" onClick={handleCancel}>Cancel</button>
        <h2>Add A Movie:</h2>
        <form className="movieForm" onSubmit={handleAdd}>
            <input className="input" type="text" placeholder="Enter Title" value={title} 
                    onChange={(event) => setTitle(event.target.value)}/>
            <input className="input" type="text" placeholder="Enter URL" value={url} 
                    onChange={(event) => setUrl(event.target.value)}/>
            <textarea name={description} rows="3" cols="40" placeholder="Add a Description"
                    onChange={(event) => setDescription(event.target.value)}></textarea>
            <select className="select" onChange={(event) => setCategory(event.target.value)}>
                    <option value="Default">Choose Category</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
            <button className="button" type="submit">Save</button>
        </form>
        </>
    )
}

export default AddMovie;
