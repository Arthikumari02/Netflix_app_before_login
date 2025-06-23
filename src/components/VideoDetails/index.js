import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_EPISODE_DETAILS, UPDATE_EPISODE } from '../../graphql/queries';
import { Play, Volume2, RotateCcw, Maximize2 } from 'lucide-react';
import ShowInfo from '../Info';
import MoreDetails from '../MoreDetails';

const VideoDetails = ({ episodeId }) => {
  const { data, error } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId },
    skip: !episodeId,
  });

  const [updateEpisode] = useMutation(UPDATE_EPISODE);

  const [episodeData, setEpisodeData] = useState({
    title: '',
    genres: '',
    description: '',
    audio: '',
    subtitles: '',
    tags: '',
    rating: '',
  });

 useEffect(() => {
  if (!data?.episode?.id) return;

  const customMeta = {
    title: "Rick and Morty",
    genres: "Sci-Fi, Animation",
    description: "Brilliant scientist Rick takes his fretful teenage grandson, Morty, on wild misadventures in other worlds and alternate dimensions.",
    audio: "English",
    subtitles: "English",
    tags: "Dark Humor • Surreal • Adult",
    rating: "A",
  };

  setEpisodeData(customMeta);
}, [data?.episode?.id, updateEpisode]);


  if (error) return <p>Error loading episode</p>;

const showInfo = {
  title: episodeData.title || data?.episode?.name || 'Loading...',
  description: episodeData.description || data?.episode?.air_date || 'N/A',
  year: new Date(data?.episode?.air_date).getFullYear().toString(),
  rating: episodeData.rating || 'N/A',
  genre: episodeData.genres || 'N/A',
  starring: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || 'N/A',
  creators: data?.episode?.created
};

const showDetails = {
  genres: episodeData.genres || 'N/A',
  tags: episodeData.tags || 'N/A',
  audio: episodeData.audio || 'N/A',
  subtitles: episodeData.subtitles || 'N/A',
  cast: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || 'N/A',
};


  return (
    <div className="text-white px-[3%]">
     <div className="relative h-[85vh] w-full flex justify-center px-[5%]">
      <video
        className="absolute w-full h-full object-cover rounded-lg"
        src="https://occ-0-1007-1009.1.nflxso.net/so/soa5/069/1703538514855063297.mp4?v=1&e=1750716766&t=rtNqA2tETZFTc-YTBxVDkdXigJg"
        autoPlay
        muted
        loop
        playsInline
        controls
      />

      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center px-12">
        <div className="max-w-xl self-end mb-20">
          <h1 className="text-5xl font-extrabold mb-4 text-green-400" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            {showInfo.title}
          </h1>
          <input
            type="email"
            placeholder="Email address"
            className="w-full max-w-md bg-black/50 border border-gray-600 rounded-full px-4 py-3 text-white placeholder-gray-400 mb-4"
          />
          <button className="w-[200px] bg-red-600 hover:bg-red-700 py-3 rounded-full font-semibold text-lg transition-colors">
            Join now
          </button>
          <p className="text-white text-sm mt-2">Endless entertainment starting at ₹149</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-12 z-10 flex space-x-3">
        {[Play, Volume2, RotateCcw, Maximize2].map((Icon, i) => (
          <button
            key={i}
            className="p-2 bg-black/50 rounded-full border border-gray-600 hover:bg-black/70 transition-colors"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>

      <ShowInfo showData={showInfo} />

      <div className="mx-[8%] my-[3%]">
        <h1 className='text-3xl font-bold text-white mb-2'>More Details</h1>
        <MoreDetails showDetails={showDetails} />
      </div>
    </div>
  );
};

export default VideoDetails;
