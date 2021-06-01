import { AnyAction } from "redux";
import { userTypes } from "../actions/authedUser";

export type AuthedUserState = string | null;
const defaultState: AuthedUserState = null;
function authedUserReducer(
  state = defaultState,
  action: AnyAction
): AuthedUserState {
  switch (action.type) {
    case userTypes.SET_AUTHED_USER:
      return action.id;
    case userTypes.LOGOUT:
      return null;
    default:
      return state;
  }
}

export default authedUserReducer;
