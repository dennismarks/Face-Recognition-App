import React from 'react';
import Tilt from 'react-tilt';
import image from './image.png';

function Logo() {
    return (
        <div className='pa3'>
            <Tilt className="Tilt br-100 shadow-1" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src={image} alt='logo' style={{ height: 115, width: 115, paddingTop: '15px', paddingRight: '5px'}}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo