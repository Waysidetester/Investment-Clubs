import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

window.localStorage.setItem("userId", 1)

ReactDOM.render(<App />, rootElement);

registerServiceWorker();
