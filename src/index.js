import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';

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

