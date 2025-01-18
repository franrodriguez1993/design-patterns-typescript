import { HospitalIcon } from "../icons/hospital-icon";
import { RestaurantIcon } from "../icons/restaurant-icon";
import { ShopIcon } from "../icons/shop-icon";
import { Icon } from "../interface/Icon.iterface";


// Creamos una factory que tendrá un diccionario con todos los tipos de icons almacenados a medida que vayan instanciándose. Si luego se necesita usa de nuevo, se reutiliza actualizando los datos propios del nuevo icon haciendo uso del que ya está instanciado. 
export class IconFactory {
  //Diccionar con todos los tipos de icons renderizados
  private static icons: { [key: string]: Icon } = {};

  static getIcon(type: string): Icon {
    if (!this.icons[type]) {
      switch (type) {
        case 'restaurant':
          this.icons[type] = new RestaurantIcon();
          break;
        case 'hospital':
          this.icons[type] = new HospitalIcon();
          break;
        case 'shop':
          this.icons[type] = new ShopIcon();
          break;
        default:
          throw new Error(`Unknown icon type: ${type}`);
      }
    }
    return this.icons[type];
  }
}
