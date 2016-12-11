import React from 'react'


const ImageDetail = (props) => {
return (
    <div>
        <h1>{props.image.name}</h1>
        <img src={props.image.url}/>
    </div>
)

}


export default ImageDetail