import React from 'react'

const ImageScore = (props) => {
    const { ups, downs } = props
    const upPercent = `${100 * (ups / (ups + downs))}%`
    const downPercent = `${100 * (downs / (ups + downs))}%`
    
    return (
        <div>
        Ups/Downs
            <div className="progress">
                <div className="progress-bar progress-bar-success" style={{width: upPercent}}>
                </div>
                <div className="progress-bar progress-bar-danger" style={{width: downPercent}}>
                </div>
            </div>   
        </div>
    )
}


export default ImageScore