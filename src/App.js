import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import PokeOne from './pages/PokeOne';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles/pokeOne.css'
import './components/styles/cardhome.css'
import './components/styles/homePage.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />      
        <Route exact path='/character/:id' component={PokeOne} />      
        <Route component={NotFound} />      
      </Switch>
    </Router>
  );
}

export default App;
