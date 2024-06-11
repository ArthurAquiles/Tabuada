import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type VideoLessonUpdateInput = {
  description?: string | null;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
  videoUrl?: string | null;
};
