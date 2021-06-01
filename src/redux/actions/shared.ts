import { Dispatch } from "redux";
import { getQuestions, getUsers } from "../../apis";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function getInitialData() {
  return (dispatch: Dispatch) => {
    return Promise.all([getQuestions(), getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      }
    );
  };
}
