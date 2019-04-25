

import { combineReducers } from 'redux';
import Demo from '../containers/demo/reducer';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({ Demo });

export default rootReducer;
