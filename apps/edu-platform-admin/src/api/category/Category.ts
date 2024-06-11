import { Subject } from "../subject/Subject";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  subjects?: Array<Subject>;
  updatedAt: Date;
};
