import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('hexschool'));

registerServiceWorker();
