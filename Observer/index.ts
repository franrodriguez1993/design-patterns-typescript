import { Product } from "./classes/product";
import { Seller } from "./classes/seller";

const cocacola = new Product('Coca Cola', 2000, 10);

const martin = new Seller('Martín', cocacola);
const pedro = new Seller('Pedro', cocacola);

cocacola.attach(martin);
cocacola.attach(pedro);

// Martín vende 8 unidades
martin.sellProduct(8);

// Pedro intenta vender 2 unidades
pedro.sellProduct(2);

// Pedro intenta vender más de lo disponible
pedro.sellProduct(1);

console.log('Cantidad final en inventario:', cocacola.getQuantity()); // Debería ser 0
