import "./PlatformList.css";



function GameCard ({gameInfo}){


    return(
        <div className="PlatformCard">
            <h1 className="Platformh1">{gameInfo.title}</h1>
            <img src={gameInfo.image_url} className="Platform_Image" alt={gameInfo.title}/>
            <h1>{gameInfo.year}</h1>
            <h1>{gameInfo.genre}</h1>
        </div>
    )
}

export default GameCard