import { SET_GENDER } from './actionTypes';

export interface SetGenderAction {
  type: typeof SET_GENDER;
  payload: string;
}

export const setGender = (gender: string): SetGenderAction => ({
  type: SET_GENDER,
  payload: gender,
});


