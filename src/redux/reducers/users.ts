import { cloneDeep } from "lodash-es";
import { AnyAction } from "redux";
import { usersTypes } from "../actions/users";

export type UsersState = { [key: string]: User };
function usersReducer(state: UsersState = {}, action: AnyAction): UsersState {
  switch (action.type) {
    case usersTypes.RECEIVE_USERS:
      return action.users;
    case usersTypes.ADD_USER_Q: {
      const clone = cloneDeep(state);
      const author = clone[action.author];
      author.questions.push(action.qid);
      return clone;
    }
    case usersTypes.ADD_USER_ANSWER: {
      const { authedUser, answer, qid } = action.answer as StoreAnswer;
      const clone = cloneDeep(state);
      const user = clone[authedUser];
      user.answers = { ...user.answers, [qid]: answer };
      return clone;
    }
    default:
      return state;
  }
}

export default usersReducer;
