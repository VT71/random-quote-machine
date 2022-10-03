import React from 'react';

function Text({ quoteIndex }) {
    const quotes = [
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        'The way to get started is to quit talking and begin doing.',
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        'If life were predictable it would cease to be life, and be without flavor.',
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Life is what happens when you're busy making other plans.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        'Be the change that you wish to see in the world.',
        "In three words I can sum up everything I've learned about life: it goes on.",
    ];
    const authors = [
        'Nelson Mandela',
        'Walt Disney',
        'Steve Jobs',
        'Eleanor Roosevelt',
        'Oprah Winfrey',
        'James Cameron',
        'John Lennon',
        'Dr. Seuss',
        'Mahatma Gandhi',
        'Robert Frost',
    ];

    return (
        <>
            <h1 id='text'>{quotes[quoteIndex]}</h1>
            <p id='author'>{authors[quoteIndex]}</p>
        </>
    );
}

export default Text;
