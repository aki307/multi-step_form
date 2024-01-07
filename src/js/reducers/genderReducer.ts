
import { AnyAction } from 'redux';
import { SET_GENDER } from '../actions/actionTypes';

export interface GenderState {
  gender: string;
}

const initialState: GenderState = {
  gender: '',
};

export const genderReducer = (
  state: GenderState = initialState,
  action: AnyAction
): GenderState => {
  if (action.type === SET_GENDER) {
    return {
      ...state,
      gender: action.payload,
    };
  }

  return state;
};

export default genderReducer;
