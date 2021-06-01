import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getUsers(): Promise<{ [key: string]: User }> {
  return _getUsers();
}

export function getQuestions(): Promise<{ [key: string]: Question }> {
  return _getQuestions();
}

export function saveQuestion(question: StoreQuestion): Promise<Question> {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer: StoreAnswer): Promise<void> {
  return _saveQuestionAnswer(answer);
}
