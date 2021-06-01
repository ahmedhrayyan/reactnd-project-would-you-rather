import { AppDispatch } from "..";
import { saveQuestion, saveQuestionAnswer } from "../../apis";
import { addUserAnswer, addUserQ } from "./users";

export enum qTypes {
  RECEIVE_QS = "RECEIVE_QS",
  ADD_Q = "ADD_Q",
  ANSWER_Q = "ANSWER_Q",
}

export function receiveQuestions(questions: { [key: string]: Question }) {
  return {
    type: qTypes.RECEIVE_QS,
    questions,
  };
}

export function addQuestion(question: Question) {
  return {
    type: qTypes.ADD_Q,
    question,
  };
}

export function handleAddQuestion(question: StoreQuestion) {
  return (dispatch: AppDispatch) => {
    return saveQuestion(question).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQ(question.author, question.id));
    });
  };
}

export function addAnswer(answer: StoreAnswer) {
  return {
    type: qTypes.ANSWER_Q,
    answer,
  };
}

export function handleAddAnswer(answer: StoreAnswer) {
  return (dispatch: AppDispatch) => {
    return saveQuestionAnswer(answer).then(() => {
      dispatch(addAnswer(answer));
      dispatch(addUserAnswer(answer));
    });
  };
}
