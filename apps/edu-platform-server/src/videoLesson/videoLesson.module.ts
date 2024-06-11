import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoLessonModuleBase } from "./base/videoLesson.module.base";
import { VideoLessonService } from "./videoLesson.service";
import { VideoLessonController } from "./videoLesson.controller";
import { VideoLessonResolver } from "./videoLesson.resolver";

@Module({
  imports: [VideoLessonModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoLessonController],
  providers: [VideoLessonService, VideoLessonResolver],
  exports: [VideoLessonService],
})
export class VideoLessonModule {}
