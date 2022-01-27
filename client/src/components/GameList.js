import React, {useState, useEffect} from 'react'
import GameCard from './GameCard';


function GameList() {

  const [gameData, setGameData] = useState([]);
    console.log(gameData)

 
  const fetchFunction = () => {
    fetch('/games')
    .then(response => response.json())
    .then(data => setGameData(data))}
useEffect(fetchFunction, [])


return (
  <div className="PlatformList">
      {gameData.map(
          
        (eachGame) => {

            return (<GameCard key={eachGame.id} gameInfo={eachGame}/>)


      })}
    </div>
    )
}

export default GameList;