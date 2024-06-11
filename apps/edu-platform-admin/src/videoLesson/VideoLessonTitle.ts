import { VideoLesson as TVideoLesson } from "../api/videoLesson/VideoLesson";

export const VIDEOLESSON_TITLE_FIELD = "title";

export const VideoLessonTitle = (record: TVideoLesson): string => {
  return record.title?.toString() || String(record.id);
};
