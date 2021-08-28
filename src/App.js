import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
      

      <footer></footer>
    </div>
  );
}

export default App;
