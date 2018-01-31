import React from 'react';

const Counter = ({count, increCount, decreCount}) => (
    <div>
        <p>count: {count}</p>
        <button onClick={increCount}>increment</button>
        <button onClick={decreCount}>decrement</button>
    </div>
);

export default Counter;