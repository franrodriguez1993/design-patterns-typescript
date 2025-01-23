import { Command } from "./interface/Command";

export class SmartHomeController {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command); // Guardamos el comando ejecutado
  }

  undoLastCommand() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}