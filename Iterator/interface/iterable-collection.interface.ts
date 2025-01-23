import { MyIterator } from "./iterator.interface";

export interface IterableCollection<T> {  //Esta interface creará el iterador en nuestra clase
  createIterator(): MyIterator<T>;
}
