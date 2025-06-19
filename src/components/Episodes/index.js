import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EpisodeCarousel = ({ seasonsData }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasonsData[0].season);
  const containerRef = useRef(null);

  const selectedEpisodes = seasonsData.find(season => season.season === selectedSeason)?.episodes || [];

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6 px-8">
      {/* Season Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Episodes</h2>
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(Number(e.target.value))}
        >
          {seasonsData.map((season) => (
            <option key={season.season} value={season.season}>Season {season.season}</option>
          ))}
        </select>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full">
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto flex gap-4 pb-4 no-scrollbar"
        >
          {selectedEpisodes.map((ep, idx) => (
            <div key={idx} className="min-w-[250px] bg-[#1e1e1e] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 relative cursor-pointer">
              <img src={ep.thumbnail} alt={ep.title} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1 text-sm">{`${idx + 1}. ${ep.title}`}</h3>
                <p className="text-gray-400 text-xs mb-2">{ep.description}</p>
                <span className="text-sm font-medium text-white bg-gray-700 px-2 py-1 rounded">{ep.duration}</span>
              </div>
            </div>
          ))}
        </div>

        

        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full">
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EpisodeCarousel;
