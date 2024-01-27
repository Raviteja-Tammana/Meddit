
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import MainNavigation from './landing_page/navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
    </Router>
  );
}

export default App;
