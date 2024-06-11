import { Answer } from "../answer/Answer";
import { Exam } from "../exam/Exam";

export type Question = {
  answers?: Array<Answer>;
  createdAt: Date;
  exam?: Exam | null;
  id: string;
  questionText: string | null;
  updatedAt: Date;
};
