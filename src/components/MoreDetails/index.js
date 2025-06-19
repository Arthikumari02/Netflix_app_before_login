import React from 'react';

const MoreDetails = ({ showDetails }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="space-y-4 px-12 py-10 bg-[#383735] border border-[#1d1b1c] rounded">
        <h3 className="text-lg font-semibold text-white">Watch offline</h3>
        <p className="text-gray-400">Available to download</p>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-white">Genres</p>
          <p className="text-gray-400 text-sm">{showDetails.genres}</p>
          
          <p className="text-sm font-medium text-white mt-4">This show is...</p>
          <p className="text-gray-400 text-sm">{showDetails.tags}</p>
        </div>
      </div>
      
      <div className="space-y-4 px-12 py-10 bg-[#383735] border border-[#1d1b1c] rounded">
        <h3 className="text-lg font-semibold text-white">Audio</h3>
        <p className="text-gray-400 text-sm">{showDetails.audio}</p>
        
        <h4 className="text-sm font-medium text-white">Subtitles</h4>
        <p className="text-gray-400 text-sm">{showDetails.subtitles}</p>
      </div>
      
      <div className="space-y-4 px-12 py-10 bg-[#383735] border border-[#1d1b1c] rounded">
        <h3 className="text-lg font-semibold text-white">Cast</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{showDetails.cast}</p>
      </div>
    </div>
  );
};

export default MoreDetails;