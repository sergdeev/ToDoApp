import { createStore, combineReducers } from 'redux';
import todos from '../reducers/reducer.js';

export default createStore(todos);
