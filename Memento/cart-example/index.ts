import { CartManager } from "./classes/cart-manager";
import { HistoryMemento } from "./classes/history-memento";

// Ejemplo de uso
const cart = new CartManager();
const historyMemento = new HistoryMemento(); //caretaker

cart.add({name:"coca cola",price:2000});
historyMemento.push(cart.save()); // Guardamos el estado

cart.add({name:"pepsi",price:1900});
historyMemento.push(cart.save()); // Guardamos otro estado

cart.add({name:"fanta",price:1600});
console.log('Contenido actual:', cart.getContent()); // Contenido actual: Hola, ¿cómo estás? Espero que todo bien.

// Deshacemos cambios
const previousState = historyMemento.pop();
if (previousState) {
  cart.restore(previousState);
  console.log('Estado después de deshacer:', cart.getContent()); // Estado después de deshacer: Hola, ¿cómo estás?
}

// Deshacemos nuevamente
const earlierState = historyMemento.pop();
if (earlierState) {
  cart.restore(earlierState);
  console.log('Estado después de deshacer otra vez:', cart.getContent()); // Estado después de deshacer otra vez: Hola,
}
