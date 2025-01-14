import { UploadFile } from "../interface/UploadFile.interface";
import { S3Service } from "../services/s3.service";

export class S3Adapter implements UploadFile{
  private s3Service: S3Service;

  constructor() {
    this.s3Service = new S3Service();
  }

  upload(buffer: Buffer): string {
    const response = this.s3Service.uploadToS3(buffer);
    return response.url;
  }
  
}