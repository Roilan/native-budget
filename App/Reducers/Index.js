import { combineReducers } from 'redux';
import Budget from './Budget';

const rootReducer = combineReducers({
  budget: Budget
});

export default rootReducer;