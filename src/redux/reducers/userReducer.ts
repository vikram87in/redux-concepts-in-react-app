import { SET_USER, LOGOUT_USER } from '../actions/actionTypes/userActionTypes';
import { SetUserAction, LogoutUserAction } from '../actions/actionCreators/userActionCreator';

type Action = SetUserAction | LogoutUserAction;
interface State {
  name: string;
  isLoggedIn: boolean;
}

const initialState: State = {
  name: '',
  isLoggedIn: false,
};

const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
