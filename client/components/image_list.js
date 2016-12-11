//image list component

import React from 'react'
import ImageDetail from './image_detail'

const DATA = [
    {name: "first",
     url: "http://placekitten.com/200/400"
    },
        
    {name: "second",
     url: "http://placekitten.com/200/400"
    },
        {name: "third",
     url: "http://placekitten.com/200/400"
    }

]


const ImageList = () => {
    const RenderedImages = DATA.map(image =>{
        return <ImageDetail image={image} key={image.name}/>
    })

    return (
        <ul>
            {RenderedImages}
        </ul>
    )
}

export default ImageList