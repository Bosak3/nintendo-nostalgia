import React, { useState } from "react"
function ReviewForm () {
    const [reviewFormData, setReviewFormData] = useState({
        comment: "Add Comment",
        user_id:"Add user_id",
        game_id:"Add game_id"
      });
    
      //since the id values are the same as the keys in reviewFormData, we can write an abstract setReviewFormData here
      function handleChange(event) {
        setReviewFormData({
          ...reviewFormData,
          [event.target.id]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewFormData),
        });
        window.location.reload()
      }
    
      return (
        <form onSubmit={handleSubmit} className="PlatformCard">
          <input
            type="text"
            id="comment"
            value={reviewFormData.comment}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            id="user_id"
            value={reviewFormData.user_id}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            id="game_id"
            value={reviewFormData.game_id}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      );
    }
    
    
export default ReviewForm
    
    
    
    
    
    
    
    
    //     const [userName, setUserName] = useState("");
    //     const [reviewFormData, setReviewFormData] = useState({
    //         username: "",
    //         password: "",
    //       });
    //     const [errors, setErrors] = useState([]);
    
    //     function handleSubmit(event) {
    //         event.preventDefault();
    
    //         if (userName.length > 0) {
    //           const reviewFormData = { userName: userName};
    //           const dataArray = [...submittedData, reviewFormData];
    //           setSubmittedData(dataArray);
    //           setUserName("");
    //           setErrors([]);
    //         } else {
    //           setErrors(["User comment is required!"]);
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