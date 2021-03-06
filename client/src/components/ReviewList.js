import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';


function ReviewList() {

  const [reviewData, setReviewData] = useState([]);
    console.log(reviewData)

 
  const fetchFunction = () => {
    fetch('/reviews')
    .then(response => response.json())
    .then(data => setReviewData(data))}
useEffect(fetchFunction, [])


return (
  <div className="PlatformList">
      {reviewData.map(
          
        (eachReview) => {

            return (<ReviewCard key={eachReview.id} reviewInfo={eachReview}/>)


      })}
      <ReviewForm />
    </div>
    )
}

export default ReviewList;