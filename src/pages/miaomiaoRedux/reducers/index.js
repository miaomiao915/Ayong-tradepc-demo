import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Calculate from '../containers/calculate/reducer'
import IncomeAn from '../containers/incomeAn/reducer';



const rootReducer = combineReducers({ 
    Calculate, 
    IncomeAn, 
    routing: routerReducer, });

export default rootReducer;

