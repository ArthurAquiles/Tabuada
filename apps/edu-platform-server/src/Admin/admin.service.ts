import { Injectable } from "@nestjs/common";
import { UploadVideoDto } from "../admin/UploadVideoDto";
import { AdminUserDto } from "../admin/AdminUserDto";

@Injectable()
export class AdminService {
  constructor() {}
  async AdminManageUserAccounts(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AdminUploadVideo(args: UploadVideoDto): Promise<UploadVideoDto> {
    throw new Error("Not implemented");
  }
  async AdminUserManagement(args: AdminUserDto): Promise<AdminUserDto> {
    throw new Error("Not implemented");
  }
  async ManageUserAccounts(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ManageVideoContent(args: UploadVideoDto): Promise<UploadVideoDto> {
    throw new Error("Not implemented");
  }
  async MonitorSiteUsage(args: string): Promise<string[]> {
    throw new Error("Not implemented");
  }
  async TrackStudentProgress(args: string): Promise<string[]> {
    throw new Error("Not implemented");
  }
  async UploadVideo(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
