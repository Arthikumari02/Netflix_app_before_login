import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HorizontalCarousel = ({ title, items, sectionRef }) => {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const itemWidth = 150 + 16;
    const scrollAmount = itemWidth * 4;
    containerRef.current?.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={sectionRef} className="space-y-4 px-6 mb-8 mx-[10%]">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto no-scrollbar flex gap-4 pb-2 mx-[4%]"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[198px] h-[278px] cursor-pointer"
            >
              <img
                src={
                  item.thumbnail?.trim() ||
                  'https://placehold.co/198x278?text=No+Image'
                }
                alt={item.title || 'Untitled'}
                className="w-full h-full object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
