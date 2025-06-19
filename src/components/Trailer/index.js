import React from 'react';
import { Play } from 'lucide-react';

const NetflixTrailers = ({ trailers }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {trailers.map((trailer) => (
        <div key={trailer.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
          {/* Trailer Thumbnail */}
          <div className="relative h-48 bg-gray-700 flex items-center justify-center">
            <Play className="w-16 h-16 text-white hover:scale-110 transition-transform" />
            <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
              {trailer.duration}
            </div>
          </div>
          
          {/* Trailer Info */}
          <div className="p-4">
            <h3 className="font-semibold mb-1 text-white uppercase text-sm tracking-wide">
              {trailer.type}
            </h3>
            <p className="text-gray-400 text-sm">{trailer.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetflixTrailers;