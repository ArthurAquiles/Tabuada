import { SortOrder } from "../../util/SortOrder";

export type ExamOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  subjectId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
