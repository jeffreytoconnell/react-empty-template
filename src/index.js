// INDEX.JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HelloWorld } from './components/app';
import { HelloWorld2 } from './components/app';
import HelloWorldFunction from './components/app';

const App = () => {
    return (
        <h2>
        Hello
        </h2>
    );
};

ReactDOM.render(
    <div>
    <App />
    <HelloWorld />
    </div>,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
    <App />
    <HelloWorld2 />
    <HelloWorldFunction />
    </div>,
    document.getElementById('root2')
);
