export class S3Service {

  uploadToS3(bufferFile: Buffer) {
    this.proccessBuffer(bufferFile);
  
    return {
      message: "Image uploaded to S3",
      size: bufferFile.buffer.byteLength,
      url:`'https://s3-aws'/${Math.round(Math.random() * 100)}`
    }
  }

  private proccessBuffer(bufferFile: Buffer) {
    console.log("Processed");
  }
}