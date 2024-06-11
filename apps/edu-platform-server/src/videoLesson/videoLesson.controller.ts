import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VideoLessonService } from "./videoLesson.service";
import { VideoLessonControllerBase } from "./base/videoLesson.controller.base";

@swagger.ApiTags("videoLessons")
@common.Controller("videoLessons")
export class VideoLessonController extends VideoLessonControllerBase {
  constructor(
    protected readonly service: VideoLessonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
