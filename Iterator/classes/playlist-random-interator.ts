import { MyIterator } from "../interface/iterator.interface";
import { Song } from "./song";

export class PlaylistRandomIterator implements MyIterator<Song> {
  private lastPlayedIndex: number | null = null; // para saber cuál fue la última canción que sonó.

  constructor(private songs: Song[]) {}

  next(): IteratorResult<Song> {
    if (this.songs.length === 0) { // chequeamos tenga al menos una canción.
      return { value: undefined as any, done: true };
    }

    let nextIndex: number;

    do {
      nextIndex = this.randomIndex();
    } while (nextIndex === this.lastPlayedIndex && this.songs.length > 1);

    this.lastPlayedIndex = nextIndex;
    return { value: this.songs[nextIndex], done: false };
  }

  hasNext(): boolean {
    return this.songs.length > 0;
  }

  private randomIndex(): number {
    return Math.floor(Math.random() * this.songs.length);
  }
}
