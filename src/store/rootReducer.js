import { combineReducers } from 'redux';

import cardParamsReducer from './cardParams/reducer';
import gitUserReducer from './gitUser/reducer';

export default combineReducers({
    cardParams: cardParamsReducer,
    gitUser: gitUserReducer
});
