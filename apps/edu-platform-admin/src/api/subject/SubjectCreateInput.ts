import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ExamCreateNestedManyWithoutSubjectsInput } from "./ExamCreateNestedManyWithoutSubjectsInput";
import { VideoLessonCreateNestedManyWithoutSubjectsInput } from "./VideoLessonCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  exams?: ExamCreateNestedManyWithoutSubjectsInput;
  name?: string | null;
  videoLessons?: VideoLessonCreateNestedManyWithoutSubjectsInput;
};
