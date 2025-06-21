import React from 'react';

const ShowInfo = ({ showData }) => {
  return (
    <div className="bg-neutral-800/80 border-2 border-neutral-500 rounded-xl p-8 flex justify-between items-start text-white max-w-6xl mb-10 mt-[4%] mx-[13%]">
      <div className="flex-1 pr-6">
        <h2 className="text-2xl font-bold mb-2">{showData.title}</h2>
        <div className="flex items-center space-x-4 text-sm text-white/70 mb-2">
          <span>{showData.year}</span>
          <span>•</span>
          <span>{showData.rating}</span>
          <span>•</span>
          <span>{showData.genre}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{showData.description}</p>
      </div>

      <div className="border-l border-gray-700 pl-6 w-1/3">
        <p className="text-sm text-gray-300">
          <span className="text-white font-semibold">Starring: </span>
          {showData.starring}
        </p>
      </div>
    </div>
  );
};

export default ShowInfo;
