import { Exam as TExam } from "../api/exam/Exam";

export const EXAM_TITLE_FIELD = "title";

export const ExamTitle = (record: TExam): string => {
  return record.title?.toString() || String(record.id);
};
