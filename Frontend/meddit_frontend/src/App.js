
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainNavigation from './landing_page/navigation/MainNavigation';

import LoginPage from './landing_page/pages/LoginPage.js'
import Feed from './feed/feed.js';
import CreatePost from './creatingPost/creating.js';
import Info from './landing_page/pages/AboutUs.js';
import NewFeed from './feed/newFeed.js';


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
          <Route path='/AboutUs' exact element={ <Info />}></Route>
          <Route path='/newFeed' exact element={ <NewFeed />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
