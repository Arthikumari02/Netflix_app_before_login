const ShowInfo = ({ showData }) => {
  return (
    <div className="bg-neutral-800/80 border border-neutral-600 rounded-2xl px-8 py-6 flex justify-between text-white  mx-[8%] mt-10 mb-12">

      <div className="w-2/3 pr-6">
        <h2 className="text-2xl font-bold mb-1">{showData.title}</h2>

        <div className="flex items-center gap-3 text-sm text-white font-semibold my-3">
          <span>{showData.year}</span>
          <span>•</span>
          <span>{showData.seasons} Seasons</span>
          <span>•</span>
          <span>{showData.rating}</span>
          <span>•</span>
          <span className="capitalize">{showData.genre}</span>
        </div>

        <p className="text-base font-semibold text-white leading-relaxed">
          {showData.description}
        </p>
      </div>

      <div className="w-1/3 pl-6 flex flex-col justity-center items-left self-center border-l border-neutral-500 text-sm text-white space-y-2">
        <p>
          <span className="text-white font-bold">Starring: </span>
          {showData.starring}
        </p>
        <p>
          <span className="text-white font-bold">Creators: </span>
          {showData.creators}
        </p>
      </div>
    </div>
  );
};

export default ShowInfo;
