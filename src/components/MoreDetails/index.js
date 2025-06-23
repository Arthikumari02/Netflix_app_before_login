const MoreDetails = ({ showDetails }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="space-y-1 px-8 py-8 bg-neutral-800/80 border-2 border-neutral-500 rounded-2xl">
        <h3 className="text-base font-semibold text-white">Watch offline</h3>
        <p className="text-white/80 ">Available to download</p>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-white pt-2">Genres</p>
          <p className="text-white/80 text-sm">{showDetails.genres}</p>
          
          <p className="text-sm font-medium text-white pt-2">This show is...</p>
          <p className="text-white/80 text-sm">{showDetails.tags}</p>
        </div>
      </div>
      
      <div className="space-y-1 px-8 py-8 bg-neutral-800/80 border-2 border-neutral-500 rounded-2xl">
        <h3 className="text-base font-semibold text-white">Audio</h3>
        <p className="text-white/80 text-sm">{showDetails.audio}</p>
        
        <h4 className="text-sm font-medium text-white pt-3">Subtitles</h4>
        <p className="text-white/80 text-sm">{showDetails.subtitles}</p>
      </div>
      
      <div className="space-y-1 px-8 py-8 bg-neutral-800/80 border-2 border-neutral-500 rounded-2xl">
        <h3 className="text-base font-semibold text-white">Cast</h3>
        <p className="text-white/90 text-sm leading-relaxed">{showDetails.cast}</p>
      </div>
    </div>
  );
};

export default MoreDetails;