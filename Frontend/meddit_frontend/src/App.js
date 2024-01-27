
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainNavigation from './landing_page/navigation/MainNavigation';

import AboutUs from './landing_page/pages/AboutUs';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' exact element={< AboutUs />}>
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
