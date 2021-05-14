import { useHistory } from 'react-router-dom';


function AddMovie() {

    const history = useHistory();

    
    const handleButton = () => {
        console.log('Clicked Add Movie button');
        history.push('/');
    }

    return (
        <>
        <h1>Ope, wrong page</h1>
        <button className="button" onClick={handleButton}>Cancel</button>
        </>
    )
}

export default AddMovie;