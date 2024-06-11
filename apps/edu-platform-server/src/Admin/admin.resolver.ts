import * as graphql from "@nestjs/graphql";
import { UploadVideoDto } from "../admin/UploadVideoDto";
import { AdminUserDto } from "../admin/AdminUserDto";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Query(() => String)
  async AdminManageUserAccounts(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminManageUserAccounts(args);
  }

  @graphql.Mutation(() => UploadVideoDto)
  async AdminUploadVideo(
    @graphql.Args()
    args: UploadVideoDto
  ): Promise<UploadVideoDto> {
    return this.service.AdminUploadVideo(args);
  }

  @graphql.Mutation(() => AdminUserDto)
  async AdminUserManagement(
    @graphql.Args()
    args: AdminUserDto
  ): Promise<AdminUserDto> {
    return this.service.AdminUserManagement(args);
  }

  @graphql.Query(() => String)
  async ManageUserAccounts(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageUserAccounts(args);
  }

  @graphql.Mutation(() => UploadVideoDto)
  async ManageVideoContent(
    @graphql.Args()
    args: UploadVideoDto
  ): Promise<UploadVideoDto> {
    return this.service.ManageVideoContent(args);
  }

  @graphql.Query(() => [String])
  async MonitorSiteUsage(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.MonitorSiteUsage(args);
  }

  @graphql.Query(() => [String])
  async TrackStudentProgress(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.TrackStudentProgress(args);
  }

  @graphql.Query(() => String)
  async UploadVideo(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadVideo(args);
  }
}
