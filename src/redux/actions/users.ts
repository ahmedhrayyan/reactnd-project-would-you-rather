export enum usersTypes {
  RECEIVE_USERS = "RECEIVE_USERS",
  ADD_USER_Q = "ADD_USER_Q",
  ADD_USER_ANSWER = "ADD_USER_ANSWER",
}

export function receiveUsers(users: { [key: string]: User }) {
  return {
    type: usersTypes.RECEIVE_USERS,
    users,
  };
}

export function addUserQ(author: string, qid: string) {
  return {
    type: usersTypes.ADD_USER_Q,
    author,
    qid,
  };
}

export function addUserAnswer(answer: StoreAnswer) {
  return {
    type: usersTypes.ADD_USER_ANSWER,
    answer,
  };
}
