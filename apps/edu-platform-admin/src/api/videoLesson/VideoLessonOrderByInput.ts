import { SortOrder } from "../../util/SortOrder";

export type VideoLessonOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  subjectId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
