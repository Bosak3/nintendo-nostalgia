import React, { useState } from "react"
function Login () {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
      });
    
      //since the id values are the same as the keys in formData, we can write an abstract setFormData here
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    
      return (
        <form onSubmit={handleSubmit} className="PlatformCard">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      );
    }
    
    
export default Login
    
    
    
    
    
    
    
    
    //     const [userName, setUserName] = useState("");
    //     const [formData, setFormData] = useState({
    //         username: "",
    //         password: "",
    //       });
    //     const [errors, setErrors] = useState([]);
    
    //     function handleSubmit(event) {
    //         event.preventDefault();
    
    //         if (userName.length > 0) {
    //           const formData = { userName: userName};
    //           const dataArray = [...submittedData, formData];
    //           setSubmittedData(dataArray);
    //           setUserName("");
    //           setErrors([]);
    //         } else {
    //           setErrors(["User name is required!"]);
    //         }
    //       }
    
    //     function handleUserNameChange(e){
    //         setUserName(e.target.value)
    //     }
    
    //     const listOfSubmissions = submittedData.map((data, index) => {
    //         return (
    //           <div key={index}>
    //             {data.userName}
    //           </div>
    //         );
    //       });
    
    //     return(
    //         <div className="PlatformCard">
    //             <form onSubmit={handleSubmit}>
    //                 <input type="text" onChange={handleUserNameChange} value={userName}/>
    //                 <button type="submit">Submit</button>
    //             </form>
    //             {errors.length > 0
    //                 ? errors.map((error, index) => (
    //                     <p key={index} style={{ color: "red" }}>
    //                         {error}
    //                     </p>
    //                     ))
    //                 : null
    //             }
                
    //             {console.log({listOfSubmissions})}
    //         </div>
                
                
    //     )
    // }