import { useHistory } from 'react-router-dom';


function Details() {

    const history = useHistory();

    
    const handleButton = () => {
        console.log('Clicked Back to List button');
        history.push('/');
    }

    return (
        <>
        <h1>oh hay</h1>
        <button className="button" onClick={handleButton}>Back to List</button>
        </>
    )
}

export default Details;