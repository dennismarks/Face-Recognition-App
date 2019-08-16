import React from 'react';

function FaceRecognition({imageURL}) {
    return (
        <div className='center ma mt2'>
            <img alt='' src={imageURL} width='500px'/>
        </div>
    )
}

export default FaceRecognition