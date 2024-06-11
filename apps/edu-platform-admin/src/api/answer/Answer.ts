import { Question } from "../question/Question";

export type Answer = {
  answerText: string | null;
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  question?: Question | null;
  updatedAt: Date;
};
