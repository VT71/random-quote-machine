import './App.css';
import { useState } from 'react';
import Text from './Text';
import Image from './Image';

function App() {
    const [quoteIndex, setQuote] = useState(Math.floor(Math.random() * 9));
    const [imgIndex, setImage] = useState(Math.floor(Math.random() * 9));

    const generateRandom = () => {
        let newImgIndex = Math.floor(Math.random() * 9);
        let newQuoteIndex = Math.floor(Math.random() * 9);
        /*
        while (newImgIndex === imgIndex) {
            console.log('Inside while 1');
            newImgIndex = Math.floor(Math.random() * 9);
        }
        */
        setImage(newImgIndex);
        /*
        while (newQuoteIndex === quoteIndex) {
            console.log('Inside while 2');
            newQuoteIndex = Math.floor(Math.random() * 9);
        }
        */
        setQuote(newQuoteIndex);
    };

    return (
        <div className='container'>
            <Image imgIndex={imgIndex} />
            <a
                id='new-quote'
                target='_blank'
                href='https://twitter.com/intent/tweet'
            >
                <i className='fa-brands fa-square-twitter' />
            </a>
            <div id='quote-box' className='quote-container'>
                <div className='quote-wrapper'>
                    <Text quoteIndex={quoteIndex} />
                </div>
                <button id='new-quote' onClick={generateRandom}>
                    New Quote
                </button>

                {/* To pass freecodecamp requirement. Twitter Icon positioned in the top left corner. */}
                <a id='tweet-quote' href='https://twitter.com/intent/tweet'></a>
            </div>
        </div>
    );
}

export default App;
