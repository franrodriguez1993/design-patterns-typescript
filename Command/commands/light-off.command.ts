import { Light } from "../classes/Light";
import { Command } from "../interface/Command";

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}