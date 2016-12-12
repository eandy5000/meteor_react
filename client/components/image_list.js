//image list component

import React from 'react'
import ImageDetail from './image_detail'


const ImageList = (props) => {
    const ValidImages = props.images.filter(image => !image.is_album)


    const RenderedImages = ValidImages.map(image => 
        <ImageDetail image={image} key={image.id} />
    )


    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    )
}

export default ImageList