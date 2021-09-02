import './App.css';
import Navbar from './components/navbar';
import Body from './components/body'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>

          <Route path='/cart_view' exact>
            <Navbar />
            <h1>Página do Carrinho/Checkout</h1>
            <Footer />
          </Route>
          <Route path='/'>
            <Navbar />
            <Body />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
