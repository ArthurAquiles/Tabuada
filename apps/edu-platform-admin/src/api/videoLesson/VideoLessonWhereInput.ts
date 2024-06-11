import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type VideoLessonWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  subject?: SubjectWhereUniqueInput;
  title?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
