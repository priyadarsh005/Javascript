import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const items = [
    { "id": 1, "name": "Pen", "price": 25 },
    { "id": 2, "name": "Eraser", "price": 8 },
    { "id": 3, "name": "Juice", "price": 30 },
    { "id": 4, "name": "Mask", "price": 20 }
]

ReactDOM.render(<App items={items} />, document.getElementById('root'));
