import React from 'react';

const NetflixTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mt-20 mb-5 flex justify-center">
      <div className="flex bg-black/80 backdrop-blur-md rounded-full px-3 py-1 space-x-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
              activeTab === tab
                ? 'bg-white text-black'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NetflixTabs;
