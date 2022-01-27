import React from 'react';

import PlatformList from './components/PlatformList';
import GameList from './components/GameList';
import NavBar from './components/NavBar';
import ReviewList from './components/ReviewList'

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

        <Route exact path="/">
          <PlatformList />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)
}

export default App;
