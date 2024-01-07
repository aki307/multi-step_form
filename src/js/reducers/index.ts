import { combineReducers } from 'redux';
import genderReducer, { GenderState } from './genderReducer'; 

export interface RootState {
  gender: GenderState; 
}

export default combineReducers({
  gender: genderReducer
});