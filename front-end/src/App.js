import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee/AddEmployee';

function App() {
  return (
      <Router>
        <Route path = "/" exact component={Home} />
        <Route path = "/add-employee" exact component={AddEmployee} />
      </Router>
  );
}

export default App;
