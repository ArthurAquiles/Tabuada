import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExamListRelationFilter } from "../exam/ExamListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { VideoLessonListRelationFilter } from "../videoLesson/VideoLessonListRelationFilter";

export type SubjectWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  exams?: ExamListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  videoLessons?: VideoLessonListRelationFilter;
};
