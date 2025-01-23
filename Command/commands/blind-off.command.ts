import { Blinds } from "../classes/Blinds";
import { Command } from "../interface/Command";

export class BlindsCloseCommand implements Command {
  constructor(private blinds: Blinds) {}

  execute() {
    this.blinds.close();
  }

  undo() {
    this.blinds.open();
  }
}