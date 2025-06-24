import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Episode = ({ seasonsData, onEpisodeClick  }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasonsData[0].season);
  const containerRef = useRef(null);

  const selectedEpisodes = seasonsData.find(season => season.season === selectedSeason)?.episodes || [];

  const scroll = (direction) => {
   if (containerRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const cardWidth = containerRef.current.offsetWidth;
        const gap = 16;
        const scrollAmount = cardWidth + gap;
        
        containerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      } else {
        const itemWidth = 327 + 16;
        const scrollAmount = itemWidth * 4;
        
        containerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
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
    <div className="mx-[3%] md:mx-1">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Episodes</h2>
        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(Number(e.target.value))}
          className="px-4 py-2 bg-neutral-700 text-white rounded-full border-none outline-none"
        >
          {seasonsData.map((season) => (
            <option key={season.season} value={season.season}>
              Season {season.season}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth
                     md:gap-4 md:overflow-x-hidden md:flex-nowrap
                     pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {selectedEpisodes.map((ep, idx) => (
            <div
              key={ep.id}
              onClick={() => onEpisodeClick(ep.id)}
              className="flex-shrink-0 bg-neutral-800/80 border-2 border-neutral-500 rounded-xl relative cursor-pointer hover:border-neutral-400 transition-colors
                         w-full h-[360px] md:w-[327px] md:h-[367px]
                         min-w-full md:min-w-[327px]"
            >
              <div className="w-full h-[60%] md:h-[65%] rounded-xl overflow-hidden relative">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full h-full object-cover p-3 rounded-xl"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {ep.duration}
                </div>
              </div>
              <div className="p-4 h-[40%] md:h-[35%] flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-2 line-clamp-1">
                    {idx + 1}. {ep.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                    {ep.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Episode;