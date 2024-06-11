import { Category } from "../category/Category";
import { Exam } from "../exam/Exam";
import { VideoLesson } from "../videoLesson/VideoLesson";

export type Subject = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  exams?: Array<Exam>;
  id: string;
  name: string | null;
  updatedAt: Date;
  videoLessons?: Array<VideoLesson>;
};
