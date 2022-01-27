import React from 'react';

import PlatformList from './components/PlatformList';
import GameList from './components/GameList';
import NavBar from './components/NavBar';
import ReviewList from './components/ReviewList'
import Login from './components/Login';

import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

return (
  <div>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/games">
          <GameList />
        </Route>
        
        <Route exact path="/reviews">
          <ReviewList />
        </Route>

        <Route exact path="/platforms">
          <PlatformList />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)
}

export default App;
