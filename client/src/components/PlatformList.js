import React, {useState, useEffect} from 'react'
import PlatformCard from './PlatformCard';


function PlatformList() {

  const [platformData, setPlatformData] = useState([]);
    console.log(platformData)

 
  const fetchFunction = () => {
    fetch('/platforms')
    .then(response => response.json())
    .then(data => setPlatformData(data))}
useEffect(fetchFunction, [])


return (
  <div>
      {platformData.map(
          
        (eachPlatform) => {

            return (<PlatformCard key={eachPlatform.id} platformInfo={eachPlatform}/>)


      })}
    </div>
    )
}

export default PlatformList;