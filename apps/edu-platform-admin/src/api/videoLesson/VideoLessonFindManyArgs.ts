import { VideoLessonWhereInput } from "./VideoLessonWhereInput";
import { VideoLessonOrderByInput } from "./VideoLessonOrderByInput";

export type VideoLessonFindManyArgs = {
  where?: VideoLessonWhereInput;
  orderBy?: Array<VideoLessonOrderByInput>;
  skip?: number;
  take?: number;
};
