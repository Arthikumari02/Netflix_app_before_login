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

  const [episodeMeta, setEpisodeMeta] = useState({
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
    description: "The Homicide Intervention Team (HIT)...",
    audio: "English",
    subtitles: "English",
    tags: "Dark Humor • Surreal • Adult",
    rating: "A",
  };

  setEpisodeMeta(customMeta);
}, [data?.episode?.id, updateEpisode]);


  if (error) return <p>Error loading episode</p>;

const showInfo = {
  title: episodeMeta.title || data?.episode?.name || 'Loading...',
  description: episodeMeta.description || data?.episode?.air_date || 'N/A',
  year: new Date(data?.episode?.air_date).getFullYear().toString(),
  rating: episodeMeta.rating || 'N/A',
  genre: episodeMeta.genres || 'N/A',
  starring: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || 'N/A',
};

const showDetails = {
  genres: episodeMeta.genres || 'N/A',
  tags: episodeMeta.tags || 'N/A',
  audio: episodeMeta.audio || 'N/A',
  subtitles: episodeMeta.subtitles || 'N/A',
  cast: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || 'N/A',
};


  return (
    <div className="text-white">
      <div className="relative h-[60vh] bg-gradient-to-r from-black via-gray-900 to-black flex items-center mx-[5%]">
        <div className="container mx-auto px-12">
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
          <p className="text-gray-400 text-sm mt-2">Endless entertainment starting at ₹149</p>
        </div>

        <div className="absolute bottom-8 right-12 flex space-x-3">
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

      <div className="mx-[10%] my-[3%]">
        <h1 className='text-3xl font-bold text-white'>More Details</h1>
        <MoreDetails showDetails={showDetails} />
      </div>
    </div>
  );
};

export default VideoDetails;
