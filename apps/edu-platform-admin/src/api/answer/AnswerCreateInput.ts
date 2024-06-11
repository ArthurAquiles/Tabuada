import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  answerText?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
