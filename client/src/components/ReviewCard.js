import "./PlatformList.css";



function ReviewCard ({reviewInfo}){

    const handleDelete = () => {
        let id = reviewInfo.id
        fetch(`/reviews/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        
       
    })
    window.location.reload()}
    return(
        <div className="PlatformCard">
            <h1 className="Platformh1">{reviewInfo.comment}</h1>
            <button type="submit" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ReviewCard