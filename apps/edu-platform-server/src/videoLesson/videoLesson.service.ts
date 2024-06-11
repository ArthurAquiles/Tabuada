import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoLessonServiceBase } from "./base/videoLesson.service.base";

@Injectable()
export class VideoLessonService extends VideoLessonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
