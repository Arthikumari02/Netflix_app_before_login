const MoreDetails = ({ showDetails }) => {
  return (
    <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 max-w-2xl md:max-w-none">
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Watch offline</h3>
        <p className="text-gray-400 text-sm mb-4">Available to download</p>
        
        <div className="mb-4">
          <h4 className="text-white font-medium mb-1">Genres</h4>
          <p className="text-gray-400 text-sm">{showDetails.genres}</p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-1">This show is ...</h4>
          <p className="text-gray-400 text-sm">{showDetails.tags}</p>
        </div>
      </div>
      
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Audio</h3>
        <p className="text-gray-400 text-sm mb-4">{showDetails.audio}</p>
        
        <div>
          <h4 className="text-white font-medium mb-1">Subtitles</h4>
          <p className="text-gray-400 text-sm">{showDetails.subtitles}</p>
        </div>
      </div>
      
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Cast</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{showDetails.cast}</p>
      </div>
    </div>
  );
};

export default MoreDetails;