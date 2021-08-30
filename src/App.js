import './App.css';
import Navbar from './components/navbar';
import Body from './components/body'
import Footer from './components/footer'
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
      <Footer></Footer>
      </Router>
      

      <footer></footer>
    </div>
  );
}

export default App;
