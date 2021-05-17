import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

// added router, routes for views navigation
function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details/>
        </Route>
        <Route path="/addMovie">
          <AddMovie/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
