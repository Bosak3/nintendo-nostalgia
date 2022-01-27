import React from "react";
import { NavLink } from "react-router-dom";
import './PlatformList.css'

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}

          className="LinkStyles"
        >
          Home
        </NavLink>
        <NavLink
          to="/games"
          exact
          
          activeStyle={{
            background: "darkblue",
          }}
          className="LinkStyles"
        >
         Games
        </NavLink>
       
      </div>
    );
  }

  export default NavBar;

