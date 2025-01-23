import { Light } from "../classes/Light";
import { Command } from "../interface/Command";

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}