import { QuestionUpdateManyWithoutExamsInput } from "./QuestionUpdateManyWithoutExamsInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type ExamUpdateInput = {
  description?: string | null;
  questions?: QuestionUpdateManyWithoutExamsInput;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
};
