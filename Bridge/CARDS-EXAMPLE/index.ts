import { ReelCard } from "./cards/reel-card";
import { VideoCard } from "./cards/video-card";
import { HomeFeed } from "./services/home-feed";
import { RelatedFeed } from "./services/related-feed";

// database
const dataVideos = [
  {
    title: 'text',
    thumbnail: 'text',
    type:'video'
  },
    {
    title: 'text',
    thumbnail: 'text',
    type:'reel'
  },
      {
    title: 'text',
    thumbnail: 'text',
    type:'video'
  }
]

// HOME
export function processData(data: any[],section:'home' | 'related') {
  const processedData: string[] = [];
  const videoCard = new VideoCard();
  const reelCard = new ReelCard();

  data.forEach((v) => {

    const card = v.type === "video" ? videoCard: reelCard;

    const f = section === 'home' ? new HomeFeed(v.title, v.thumbnail, card) : new RelatedFeed(v.title, v.thumbnail, card) 

    processedData.push(f.createCard())
  
  })

  return processedData;
}

const videosForHome = processData(dataVideos,'home');

console.log(videosForHome);


// RELATED FEED

const videosRelated = processData(dataVideos, 'related');

console.log(videosRelated);