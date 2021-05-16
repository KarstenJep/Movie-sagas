import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';


function Details() {

    // setting up useHistory, and redux store
    const history = useHistory();
    const details = useSelector(store => store.details);
    // console.log('on details page', details);
    
    // handle for 'Back to movie list'
    const handleButton = () => {
        console.log('Clicked Back to List button');
        // bring user back to movie list
        history.push('/');
    }

    // DOM render via .map 
    return (
        <>    
            {details.map(detail => {
                // console.log('in detail.map', detail);
                return (
                <div>
                    <h1>{detail.title}</h1>
                    {detail.genres.map(genre => { 
                        return (
                            <h3>{genre}</h3>
                        )
                    })}
                    <p>{detail.description}</p>
                    <img src={detail.poster}/>
                </div>
                );
            })}
            <button className="button" onClick={handleButton}>Back to List</button>
        </>
    )
}


export default Details;

// key={detail.id}

