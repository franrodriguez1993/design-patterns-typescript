import { Icon } from "../interface/Icon.iterface";

export class HospitalIcon implements Icon {
  render(x: number, y: number): void {
    console.log(`Rendering Hospital at (${x}, ${y})`);
  }
}