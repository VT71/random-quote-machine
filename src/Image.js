import React from 'react';
import './App.css';

function Image({ imgIndex }) {
    const src = `/images/image-${imgIndex}.jpg`;

    return (
        <img
            key={imgIndex}
            src={src}
            style={{ animation: 'imageAnimation 3s' }}
        />
    );
}

export default Image;
