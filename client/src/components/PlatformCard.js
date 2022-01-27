import "./PlatformList.css";



function PlatformCard ({platformInfo}){


    return(
        <div>
            <h1>{platformInfo.title}</h1>
            <img src={platformInfo.image_url} className="Platform_Image" alt={platformInfo.title}/>
            <h1>{platformInfo.year}</h1>
        </div>
    )
}

export default PlatformCard