import { MyIterator } from "../interface/iterator.interface";
import { Song } from "./song";

export class PlaylistIterator implements MyIterator<Song> {
  private position: number = 0;

  constructor(private songs: Song[]) {}

  next(): IteratorResult<Song> {
    if (this.hasNext()) {
      return { value: this.songs[this.position++], done: false };
    }
    return { value: undefined as any, done: true };
  }

  hasNext(): boolean {
    return this.position < this.songs.length; // chequea la posición de la playlist con el total de canciones
  }
}
