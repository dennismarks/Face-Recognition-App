import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm({onInputChange, onButtonSubmit}) {
    return (
        <div class='container'>
            <p className='f3'> {'Magic Brain will detect faces in your pictures'} </p>
            <div class='inner'>
                <input className='f4 pa2' type='text' onChange={onInputChange}/>
                <button className='grow' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm