import { Icon } from "../interface/Icon.iterface";

export class ShopIcon implements Icon {
  render(x: number, y: number): void {
    console.log(`Rendering Shop at (${x}, ${y})`);
  }
}
