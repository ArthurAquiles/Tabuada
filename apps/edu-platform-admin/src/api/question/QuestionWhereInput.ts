import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  exam?: ExamWhereUniqueInput;
  id?: StringFilter;
  questionText?: StringNullableFilter;
};
