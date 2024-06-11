import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  exam?: ExamWhereUniqueInput | null;
  questionText?: string | null;
};
