import { SmartHomeController } from "./app";
import { Blinds } from "./classes/Blinds";
import { Light } from "./classes/Light";
import { BlindsCloseCommand } from "./commands/blind-off.command";
import { BlindsOpenCommand } from "./commands/blind-on.command";
import { LightOffCommand } from "./commands/light-off.command";
import { LightOnCommand } from "./commands/light-on.command";

// Uso del patrón Command
const light = new Light();
const blinds = new Blinds();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const blindsOpen = new BlindsOpenCommand(blinds);
const blindsClose = new BlindsCloseCommand(blinds);

const controller = new SmartHomeController();

controller.executeCommand(lightOn);    // 💡 Light is ON
controller.executeCommand(blindsOpen); // 🪟 Blinds are OPEN
controller.undoLastCommand();         // 🪟 Blinds are CLOSED
controller.undoLastCommand();         // 💡 Light is OFF
controller.undoLastCommand();         // No commands to undo.