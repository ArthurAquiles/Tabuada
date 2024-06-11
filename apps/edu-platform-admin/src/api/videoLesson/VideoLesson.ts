import { Subject } from "../subject/Subject";

export type VideoLesson = {
  createdAt: Date;
  description: string | null;
  id: string;
  subject?: Subject | null;
  title: string | null;
  updatedAt: Date;
  videoUrl: string | null;
};
