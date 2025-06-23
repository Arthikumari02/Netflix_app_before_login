import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Episode = ({ seasonsData, onEpisodeClick  }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasonsData[0].season);
  const containerRef = useRef(null);

  const selectedEpisodes = seasonsData.find(season => season.season === selectedSeason)?.episodes || [];

  const scroll = (direction) => {
    if (containerRef.current) {
      const itemWidth = 327 + 16;
      const scrollAmount = itemWidth * 4;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [selectedSeason]);

  return (
    <div className="space-y-6 px-[9%]">
      <div className="flex justify-left items-center gap-5">
        <h2 className="text-3xl font-bold text-white">Episodes</h2>
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-full pr-2"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(Number(e.target.value))}
        >
          {seasonsData.map((season) => (
            <option key={season.season} value={season.season}>Season {season.season}</option>
          ))}
        </select>
      </div>

      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full">
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto flex gap-4 pb-4 no-scrollbar"
        >
          {selectedEpisodes.map((ep, idx) => (
            <div
              key={idx}
              onClick={() => onEpisodeClick(ep.id)}
              className="min-w-[327px] h-[367px] bg-neutral-800/80 border-2 border-neutral-500 rounded-xl relative cursor-pointer"
            >
              <img src={ep.thumbnail?.trim() ||
                  'https://placehold.co/198x278?text=No+Image'} alt={ep.title} className="w-full h-[172px] p-1 object-cover rounded" />
              <div className="p-4 mt-2">
                <h3 className="text-white font-bold mb-1 text-lg">{`${idx + 1}. ${ep.title}`}</h3>
                <p className="text-white/70 text-base mb-2">{ep.description}</p>
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

export default Episode;