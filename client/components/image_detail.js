import React from 'react'


const ImageDetail = (props) => {
return (
    <li className="media list-group-item">
        <div className="media-left">
            <img src={props.image.url}/>
        </div>
        <div className="media-body">
            <h1 className="media-heading">{props.image.name}</h1>
        </div>
    </li>
)

}


export default ImageDetail