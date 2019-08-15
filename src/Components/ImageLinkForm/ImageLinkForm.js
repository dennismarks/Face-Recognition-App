import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm() {
    return (
        <div class='container'>
            <p className='f3'> {'Magic Brain will detect faces in your pictures'} </p>
            <div class='inner'>
                <input className='f4 pa2' type='text' />
                <button className='grow'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm