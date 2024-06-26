/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SubjectService } from "../subject.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubjectCreateInput } from "./SubjectCreateInput";
import { Subject } from "./Subject";
import { SubjectFindManyArgs } from "./SubjectFindManyArgs";
import { SubjectWhereUniqueInput } from "./SubjectWhereUniqueInput";
import { SubjectUpdateInput } from "./SubjectUpdateInput";
import { ExamFindManyArgs } from "../../exam/base/ExamFindManyArgs";
import { Exam } from "../../exam/base/Exam";
import { ExamWhereUniqueInput } from "../../exam/base/ExamWhereUniqueInput";
import { VideoLessonFindManyArgs } from "../../videoLesson/base/VideoLessonFindManyArgs";
import { VideoLesson } from "../../videoLesson/base/VideoLesson";
import { VideoLessonWhereUniqueInput } from "../../videoLesson/base/VideoLessonWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubjectControllerBase {
  constructor(
    protected readonly service: SubjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subject })
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSubject(
    @common.Body() data: SubjectCreateInput
  ): Promise<Subject> {
    return await this.service.createSubject({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Subject] })
  @ApiNestedQuery(SubjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subjects(@common.Req() request: Request): Promise<Subject[]> {
    const args = plainToClass(SubjectFindManyArgs, request.query);
    return this.service.subjects({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subject(
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<Subject | null> {
    const result = await this.service.subject({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSubject(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() data: SubjectUpdateInput
  ): Promise<Subject | null> {
    try {
      return await this.service.updateSubject({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubject(
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<Subject | null> {
    try {
      return await this.service.deleteSubject({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/exams")
  @ApiNestedQuery(ExamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Exam",
    action: "read",
    possession: "any",
  })
  async findExams(
    @common.Req() request: Request,
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<Exam[]> {
    const query = plainToClass(ExamFindManyArgs, request.query);
    const results = await this.service.findExams(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        subject: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/exams")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async connectExams(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: ExamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exams: {
        connect: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/exams")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async updateExams(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: ExamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exams: {
        set: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/exams")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async disconnectExams(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: ExamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exams: {
        disconnect: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/videoLessons")
  @ApiNestedQuery(VideoLessonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VideoLesson",
    action: "read",
    possession: "any",
  })
  async findVideoLessons(
    @common.Req() request: Request,
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<VideoLesson[]> {
    const query = plainToClass(VideoLessonFindManyArgs, request.query);
    const results = await this.service.findVideoLessons(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        subject: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
        videoUrl: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/videoLessons")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async connectVideoLessons(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: VideoLessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoLessons: {
        connect: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/videoLessons")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async updateVideoLessons(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: VideoLessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoLessons: {
        set: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/videoLessons")
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async disconnectVideoLessons(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() body: VideoLessonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoLessons: {
        disconnect: body,
      },
    };
    await this.service.updateSubject({
      where: params,
      data,
      select: { id: true },
    });
  }
}
