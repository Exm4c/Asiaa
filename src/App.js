import './App.css';
import Navbar from './components/navbar';
import Body from './components/body'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Body/>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
      

      <footer></footer>
    </div>
  );
}

export default App;
