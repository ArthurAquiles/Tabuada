import { QuestionCreateNestedManyWithoutExamsInput } from "./QuestionCreateNestedManyWithoutExamsInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type ExamCreateInput = {
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutExamsInput;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
};
