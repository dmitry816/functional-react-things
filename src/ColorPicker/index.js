import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeFactory from './store';

const store = storeFactory();

const render = () =>
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('react-container')
    );
store.subscriber(render)
render()
