import "./PlatformList.css";



function ReviewCard ({reviewInfo}){


    return(
        <div className="PlatformCard">
            <h1>{reviewInfo.user_id}</h1>
            <h1 className="Platformh1">{reviewInfo.comment}</h1>
        </div>
    )
}

export default ReviewCard