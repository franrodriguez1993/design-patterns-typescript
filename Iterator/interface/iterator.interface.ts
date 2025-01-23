
export interface MyIterator<T> {
  next(): IteratorResult<T>; // Usa el tipo estándar de JavaScript.
  hasNext(): boolean; // Comprobar si hay un siguiente elemento.
}