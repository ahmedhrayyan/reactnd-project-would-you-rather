type Option = {
  votes: string[];
  text: string;
};
type Question = {
  id: string;
  author: string;
  timestamp: number;
  optionOne: Option;
  optionTwo: Option;
};
type StoreQuestion = {
  optionOneText: string;
  optionTwoText: string;
  author: string;
};
type StoreAnswer = {
  authedUser: string;
  qid: string;
  answer: "optionOne" | "optionTwo";
};
type User = {
  id: string;
  name: string;
  avatarURL: string;
  answers: { [key: string]: "optionOne" | "optionTwo" };
  questions: string[];
};
