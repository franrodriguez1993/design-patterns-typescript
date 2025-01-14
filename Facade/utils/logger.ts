export class Logger {
  private static instance: Logger; 

  public static getInstance() {
    if (!Logger.instance) {
      return new Logger();
    }
    return Logger.instance;
  }

  logInfo(message: string) {
    console.log(`Log: ${message}`);
  }
}