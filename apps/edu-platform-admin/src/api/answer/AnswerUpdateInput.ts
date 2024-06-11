import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  answerText?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
