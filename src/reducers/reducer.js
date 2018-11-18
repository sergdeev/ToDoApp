import { combineReducers } from 'redux';

import visibilityFilter from './filter.js';
import todos from './todos.js';


export default combineReducers({todos, visibilityFilter});
