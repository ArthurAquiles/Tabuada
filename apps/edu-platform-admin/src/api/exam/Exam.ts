import { Question } from "../question/Question";
import { Subject } from "../subject/Subject";

export type Exam = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  subject?: Subject | null;
  title: string | null;
  updatedAt: Date;
};
