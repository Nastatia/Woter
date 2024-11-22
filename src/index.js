import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route> 
        <Route exact path='/about'>
          <About/>
        </Route>   
        <Route exact path='/product'>
          <Product/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>   
     </Switch>
    </Router>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

