import React, { useState } from "react";
import { NavLink } from "react-router-dom";




function Signup () {
    const [user, setUser] = useState ({ username: "", password: ""});


    function handleChange(event) {
        setUser({...user, [event.target.id]: event.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
      }


    return(
        <div className="PlatformCard">
            <form onSubmit={handleSubmit} >
                <h3>Signup</h3>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <label htmlFor="username">Password </label>
                <input
                    type="text"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button type="submit">Signup</button>
            </form>
        
            <NavLink to="/login" exact> Login </NavLink>
            
        </div>
    )
}


export default Signup