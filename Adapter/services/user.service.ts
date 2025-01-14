import { DriveAdapter } from "../adapter/drive.adapter";
import { S3Adapter } from "../adapter/s3.adapter";
import { UploadFile } from "../interface/UploadFile.interface"

export class UserService {
  private uploadService: UploadFile;

  constructor() {
    this.uploadService = new S3Adapter();
    // this.uploadService = new DriveAdapter();
  }

  updateProfilePic(id: string, buffer: Buffer) {

    this.uploadService.upload(buffer);

    console.log(`Updating profile pic for ${id} user`)
  }

}