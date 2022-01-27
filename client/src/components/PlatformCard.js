import "./PlatformList.css";



function PlatformCard ({platformInfo}){


    return(
        <div className="PlatformCard">
            <h1 className="Platformh1">{platformInfo.title}</h1>
            <img src={platformInfo.image_url} className="Platform_Image" alt={platformInfo.title}/>
            <h1>{platformInfo.year}</h1>
        </div>
    )
}

export default PlatformCard