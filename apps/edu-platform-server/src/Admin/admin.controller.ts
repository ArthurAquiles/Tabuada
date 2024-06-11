import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";
import { UploadVideoDto } from "../admin/UploadVideoDto";
import { AdminUserDto } from "../admin/AdminUserDto";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Get("/:id/admin-manage-user-accounts")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminManageUserAccounts(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminManageUserAccounts(body);
      }

  @common.Post("/admin-upload-video")
  @swagger.ApiOkResponse({
    type: UploadVideoDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminUploadVideo(
    @common.Body()
    body: string
  ): Promise<UploadVideoDto> {
        return this.service.AdminUploadVideo(body);
      }

  @common.Patch("/admin-user-management")
  @swagger.ApiOkResponse({
    type: AdminUserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminUserManagement(
    @common.Body()
    body: string
  ): Promise<AdminUserDto> {
        return this.service.AdminUserManagement(body);
      }

  @common.Get("/:id/manage-user-accounts")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageUserAccounts(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageUserAccounts(body);
      }

  @common.Patch("/manage-video-content")
  @swagger.ApiOkResponse({
    type: UploadVideoDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageVideoContent(
    @common.Body()
    body: string
  ): Promise<UploadVideoDto> {
        return this.service.ManageVideoContent(body);
      }

  @common.Get("/monitor-site-usage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MonitorSiteUsage(
    @common.Body()
    body: string
  ): Promise<string[]> {
        return this.service.MonitorSiteUsage(body);
      }

  @common.Get("/track-student-progress")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TrackStudentProgress(
    @common.Body()
    body: string
  ): Promise<string[]> {
        return this.service.TrackStudentProgress(body);
      }

  @common.Get("/:id/upload-video")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadVideo(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadVideo(body);
      }
}
