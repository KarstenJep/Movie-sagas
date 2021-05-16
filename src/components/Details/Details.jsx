import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';




function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);

    // useEffect(() => {
    //     dispatch({ type: 'SET_DETAILS' });
    // }, []);

    console.log('on details page', details);

    
    const handleButton = () => {
        console.log('Clicked Back to List button');
        history.push('/');
    }

    return (
        <>
        <button className="button" onClick={handleButton}>Back to List</button>
    
        {details.map(detail => {
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

        </>
    )
}


export default Details;

// key={detail.id}

// console.log('in detail.map', detail, detail.description);