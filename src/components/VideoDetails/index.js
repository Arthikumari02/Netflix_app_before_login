import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODE_DETAILS } from '../../graphql/queries';
import { Play, Volume2, RotateCcw, Maximize2 } from 'lucide-react';
import ShowInfo from '../Info';
import MoreDetails from '../MoreDetails';

const VideoDetails = ({ episodeId }) => {
  const { data, loading, error } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId },
    skip: !episodeId,
  });

  if (loading) return <p>Loading episode...</p>;
  if (error) return <p>Error loading episode</p>;

  const showData = {
    title: data?.episode?.name ?? 'Loading...',
    description: data?.episode?.air_date ?? '',
    characters: data?.episode?.characters ?? [],
  };

  const showDetails = {
    genres: 'Sci-Fi, Animation',
    tags: 'Dark Humor • Surreal • Adult',
    audio: 'English',
    subtitles: 'English',
    cast: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || '',
  };

  const showInfo = {
  title: data?.episode?.name ?? 'Loading...',
  description: 'The Homicide Intervention Team (HIT) sends ruthless police officer Arjun Sarkaar to find a group of killers and stop their grisly murder spree.',
  year: new Date(data?.episode?.air_date).getFullYear().toString(),
  rating: 'A',
  genre: 'Thriller',
  starring: data?.episode?.characters?.slice(0, 3).map(c => c.name).join(', ') || '',
};


  return (
    <div className="text-white">
      {/* Background banner (optional image or color) */}
      <div className="relative h-[60vh] bg-gradient-to-r from-black via-gray-900 to-black flex items-center">
        <div className="container mx-auto px-12">
          <h1 className="text-5xl font-extrabold mb-4 text-green-400" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            {showData.title}
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

        {/* Action Icons */}
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

      <dvi>
        <ShowInfo showData={showInfo} />
      </dvi>

      {/* More Details */}
      <div className="mx-[15%] my-[3%]">
        <h1 className='text-4xl'>More Details</h1>
        <MoreDetails showDetails={showDetails} />
      </div>
    </div>
  );
};

export default VideoDetails;
