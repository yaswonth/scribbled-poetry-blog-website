import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Viewpost from './components/Viewpost';
import Error from './components/Error';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' >
        <Home />
      </Route>
      <Route  path='/dashboard' >
        <Dashboard />
      </Route>
      <Route  path='/login' >
        <Login />
      </Route>
      <Route  path='/posts/:id' >
        <Viewpost />
      </Route>
      <Route  path='*' >
        <Error />
      </Route>
    </Switch> 
    </Router>
    
  );
}

export default App;
