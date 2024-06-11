import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  examId?: SortOrder;
  id?: SortOrder;
  questionText?: SortOrder;
  updatedAt?: SortOrder;
};
