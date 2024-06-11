import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  exam?: ExamWhereUniqueInput | null;
  questionText?: string | null;
};
