import React, { useState } from "react";
import {Link} from 'react-router-dom'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setFormData({
          username: "",
          password: "",
          email: ""
        });
      });
  }

  return (
    <div className="PlatformCard">
      <h1>Create A User!</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <Link to="/" replace>
        Have an account already? Log in!
      </Link>
    </div>
  );
};

export default SignupForm;
















// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";




// function Signup () {
//     const [user, setUser] = useState ({ username: "", password: ""});


//     function handleChange(event) {
//         setUser({...user, [event.target.id]: event.target.value})
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         })
//       }


//     return(
//         <div className="PlatformCard">
//             <form onSubmit={handleSubmit} >
//                 <h3>Signup</h3>
//                 <label htmlFor="username">Username: </label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={user.username}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="username">Password </label>
//                 <input
//                     type="text"
//                     id="password"
//                     value={user.password}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Signup</button>
//             </form>
        
//             <NavLink to="/login" exact> Login </NavLink>
            
//         </div>
//     )
// }


// export default Signup