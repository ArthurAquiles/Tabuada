import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VideoLessonResolverBase } from "./base/videoLesson.resolver.base";
import { VideoLesson } from "./base/VideoLesson";
import { VideoLessonService } from "./videoLesson.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VideoLesson)
export class VideoLessonResolver extends VideoLessonResolverBase {
  constructor(
    protected readonly service: VideoLessonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
