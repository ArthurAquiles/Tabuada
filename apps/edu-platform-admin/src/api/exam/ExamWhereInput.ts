import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type ExamWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  subject?: SubjectWhereUniqueInput;
  title?: StringNullableFilter;
};
