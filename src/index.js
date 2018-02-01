import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/cheese'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App cheeses={cheeses} />, document.getElementById('root'));
registerServiceWorker();
