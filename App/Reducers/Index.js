import { combineReducers } from 'redux';
import Budget from './budget';

const rootReducer = combineReducers({
  budget: Budget
});

export default rootReducer;