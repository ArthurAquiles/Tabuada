import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type VideoLessonCreateInput = {
  description?: string | null;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
  videoUrl?: string | null;
};
