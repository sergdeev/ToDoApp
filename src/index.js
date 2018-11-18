import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import TodoApp from './components/TodoApp';
import store from './store/store.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = {store}><TodoApp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
