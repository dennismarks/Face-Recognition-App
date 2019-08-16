import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({imageURL, box}) {
    return (
        <div className='align-center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageURL} width='500px'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition