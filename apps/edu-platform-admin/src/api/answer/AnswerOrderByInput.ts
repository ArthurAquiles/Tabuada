import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  answerText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
