
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainNavigation from './landing_page/navigation/MainNavigation';

import AboutUs from './landing_page/pages/AboutUs';
import Feed from './feed/feed.js';
import SayHi from './feed/random.js';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' exact element={< AboutUs />}>
          </Route>
          <Route path='/feed' exact element={< Feed />}>
          </Route>
          <Route path='/random' exact element={<SayHi />}>
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
