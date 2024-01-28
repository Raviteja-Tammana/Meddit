
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainNavigation from './landing_page/navigation/MainNavigation';

import LoginPage from './landing_page/pages/LoginPage.js'
import Feed from './feed/feed.js';
import SayHi from './feed/random.js';
import CreatePost from './creatingPost/creating.js';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' exact element={< LoginPage />}>
          </Route>
          <Route path='/feed' exact element={< Feed />}>
          </Route>
          <Route path='/creating' exact element={ <CreatePost />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
