import React from 'react';
import './App.css';

function Image({ imgIndex }) {
    const src = `https://raw.githubusercontent.com/VT71/random-quote-machine/gh-pages/images/image-${imgIndex}.jpg`;

    return (
        <img
            key={imgIndex}
            src={src}
            style={{ animation: 'imageAnimation 3s' }}
        />
    );
}

export default Image;
