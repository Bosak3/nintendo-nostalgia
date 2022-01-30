import "./PlatformList.css";



function ReviewCard ({reviewInfo}){

    const handleDelete = () => {
        let id = reviewInfo.id
        fetch(`/reviews/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        
       
    })
    window.location.reload()}

    // function handleEdit(event) {
    //     setReviewData({
    //       ...reviewData,
    //       [event.target.id]: event.target.value,
    //     });
    //   }

    // function handleEditSubmit(e){
    //     e.preventDefault()

    //     fetch('/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    // }


    return(
        <div className="PlatformCard">
            <p className="Platformh1">{reviewInfo.comment}</p>
            <button type="submit" onClick={handleDelete}>Delete</button>
            {/* <form onSubmit={handleEditSubmit}>
            <input 
                type="text" 
                id="game_id" 
                onChange={handleEdit}
            
            />

          <button type="submit" >Edit</button>
          </form> */}
            
        </div>
    )
}

export default ReviewCard