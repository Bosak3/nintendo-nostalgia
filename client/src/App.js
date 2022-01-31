import PlatformList from './components/PlatformList';
import GameList from './components/GameList';
import NavBar from './components/NavBar';
import ReviewList from './components/ReviewList'
import Login from './components/Login'
import Signup from './components/Signup';



import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
const [currentUser, setCurrentUser] = useState('')

useEffect(() => {

  fetch('/me')
  .then(res => {
    if(res.ok){
      res.json().then(user => setCurrentUser(user))
    }
  })

  
}, [])

// if(!currentUser) return <Login setCurrentUser={setCurrentUser}/>
    
return (
  <div>
    <BrowserRouter>
    <NavBar currentUser={currentUser}/>
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
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
};

export default App;
