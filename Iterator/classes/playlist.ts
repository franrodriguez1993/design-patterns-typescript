import { IterableCollection } from "../interface/iterable-collection.interface";
import { MyIterator } from "../interface/iterator.interface";
import { PlaylistIterator } from "./playlist-interator";
import { PlaylistRandomIterator } from "./playlist-random-interator";
import { Song } from "./song";

export class Playlist implements IterableCollection<Song> {
  private songs: Song[] = [];

  addSong(song: Song): void {
    this.songs.push(song);
  }

  createIterator(): MyIterator<Song> {
    // return new PlaylistIterator(this.songs);  
    return new PlaylistRandomIterator(this.songs); 
  }
}
