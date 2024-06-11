import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ExamUpdateManyWithoutSubjectsInput } from "./ExamUpdateManyWithoutSubjectsInput";
import { VideoLessonUpdateManyWithoutSubjectsInput } from "./VideoLessonUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  exams?: ExamUpdateManyWithoutSubjectsInput;
  name?: string | null;
  videoLessons?: VideoLessonUpdateManyWithoutSubjectsInput;
};
