import {combineReducers} from 'redux';
import * as globalReducers from './reducers';

const appReducer = combineReducers({...globalReducers});

export default appReducer