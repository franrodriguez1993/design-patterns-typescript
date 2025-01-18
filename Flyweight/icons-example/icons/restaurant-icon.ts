import { Icon } from "../interface/Icon.iterface";

export class RestaurantIcon implements Icon {
  render(x: number, y: number): void {
    console.log(`Rendering Restaurant at (${x}, ${y})`);
  }
}