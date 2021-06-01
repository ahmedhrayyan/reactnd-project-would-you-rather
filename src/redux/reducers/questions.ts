import { cloneDeep } from "lodash-es";
import { AnyAction } from "redux";
import { qTypes } from "../actions/questions";

export type QState = { [key: string]: Question };

function qReducer(state: QState = {}, action: AnyAction): QState {
  switch (action.type) {
    case qTypes.RECEIVE_QS:
      return action.questions;
    case qTypes.ADD_Q:
      return { ...state, [action.question.id]: action.question };
    case qTypes.ANSWER_Q: {
      const { answer, qid, authedUser } = action.answer as StoreAnswer;
      const clone = cloneDeep(state);
      const question = clone[qid];
      question[answer].votes.push(authedUser);
      return clone;
    }
    default:
      return state;
  }
}

export default qReducer;
