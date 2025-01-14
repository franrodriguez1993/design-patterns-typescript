import { UploadFile } from "../interface/UploadFile.interface";
import { DriveService } from "../services/drive.service";

export class DriveAdapter implements UploadFile{
  private driveService: DriveService;

  constructor() {
    this.driveService = new DriveService();
  }

  upload(buffer: Buffer): string {
    
    const response = this.driveService.uploadImage(buffer);
    return response;
  }
  
}