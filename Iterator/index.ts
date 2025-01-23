import { Playlist } from "./classes/playlist";
import { Song } from "./classes/song";

const playlist = new Playlist();
playlist.addSong(new Song("Chase Me", "Dreamcatcher"));
playlist.addSong(new Song("Fly High", "Dreamcatcher"));
playlist.addSong(new Song("Scream", "Dreamcatcher"));
playlist.addSong(new Song("BOCA", "Dreamcatcher"));
playlist.addSong(new Song("Odd Eye", "Dreamcatcher"));
playlist.addSong(new Song("MAISON", "Dreamcatcher"));
playlist.addSong(new Song("JUSTICE", "Dreamcatcher"));
playlist.addSong(new Song("Good Night", "Dreamcatcher"));
playlist.addSong(new Song("Deja Vu", "Dreamcatcher"));
playlist.addSong(new Song("VISION", "Dreamcatcher"));

const iterator = playlist.createIterator();


// Con la Playlist regular:
// while  (iterator.hasNext()) {
//   const song = iterator.next();
//    console.log(`Now playing: ${song.value.title} by ${song.value.artist}`);
// }


// Con la playlist aleatoria:
setInterval(() => {
   const song = iterator.next();
   console.log(`Now playing: ${song.value.title} by ${song.value.artist}`);
},1000)