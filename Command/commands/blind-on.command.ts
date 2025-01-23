import { Blinds } from "../classes/Blinds";
import { Command } from "../interface/Command";

export class BlindsOpenCommand implements Command {
  constructor(private blinds: Blinds) {}

  execute() {
    this.blinds.open();
  }

  undo() {
    this.blinds.close();
  }
}