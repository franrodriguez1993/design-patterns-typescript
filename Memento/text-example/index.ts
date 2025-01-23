import { HistoryMemento } from "./classes/history-memento";
import { TextEditor } from "./classes/text-editor";

// Ejemplo de uso
const editor = new TextEditor();
const historyMemento = new HistoryMemento(); //caretaker

editor.write('Hola, ');
historyMemento.push(editor.save()); // Guardamos el estado

editor.write('¿cómo estás? ');
historyMemento.push(editor.save()); // Guardamos otro estado

editor.write('Espero que todo bien.');
console.log('Contenido actual:', editor.getContent()); // Contenido actual: Hola, ¿cómo estás? Espero que todo bien.

// Deshacemos cambios
const previousState = historyMemento.pop();
if (previousState) {
  editor.restore(previousState);
  console.log('Estado después de deshacer:', editor.getContent()); // Estado después de deshacer: Hola, ¿cómo estás?
}

// Deshacemos nuevamente
const earlierState = historyMemento.pop();
if (earlierState) {
  editor.restore(earlierState);
  console.log('Estado después de deshacer otra vez:', editor.getContent()); // Estado después de deshacer otra vez: Hola,
}
