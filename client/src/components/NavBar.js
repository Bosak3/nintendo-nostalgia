import React from "react";
import { NavLink } from "react-router-dom";
import './PlatformList.css'

function NavBar() {
    return (
      <div className="PlatformCard">
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add prop for activeStyle */
          activeStyle={{
            background: "white",
          }}

          className="LinkStyles"
        >
          Home
        </NavLink>
        <NavLink
          to="/platforms"
          exact
          
          activeStyle={{
            background: "white",
          }}
          className="LinkStyles"
        >
         Platforms
        </NavLink>
        <NavLink
          to="/games"
          exact
          
          activeStyle={{
            background: "white",
          }}
          className="LinkStyles"
        >
         Games
        </NavLink>
        <NavLink
          to="/reviews"
          exact
          
          activeStyle={{
            background: "white",
          }}
          className="LinkStyles"
        >
         Reviews
        </NavLink>
       
      </div>
    );
  }

  export default NavBar;

