import { SET_USER, LOGOUT_USER } from '../actionTypes/userActionTypes';

// Define the types for the action payloads
export interface SetUserAction {
  type: typeof SET_USER;
  payload: string;
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

// Action to set the user
export const setUser = (name: string): SetUserAction => ({
  type: SET_USER,
  payload: name,
});

// Action to log out the user
export const logoutUser = (): LogoutUserAction => ({
  type: LOGOUT_USER,
});