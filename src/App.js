import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from './graphql/queries';
import Header from './components/Header';
import NetflixTabs from './components/Tabs';
import VideoDetails from './components/VideoDetails';
import NetflixEpisodes from './components/Episodes';

import './App.css';

const App = () => {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  const [activeTab, setActiveTab] = useState('Episodes');
  const [selectedEpisodeId, setSelectedEpisodeId] = useState('1');

  const tabs = ['Trailers', 'Episodes', 'More to Watch', 'Plans'];

  if (loading) return <p>Loading episodes...</p>;
  if (error) return <p>Error loading episodes</p>;

  const episodes = data?.episodes?.results.map(ep => ({
    id: ep.id,
    title: ep.name,
    description: `Aired on ${ep.air_date}`,
    episode: ep.episode,
    duration: '22m',
  }));


const groupedBySeasonObj = {}

data.episodes.results.forEach((ep) => {
  const seasonNum = parseInt(ep.episode.slice(1, 3)) 
  if (!groupedBySeasonObj[seasonNum]) {
    groupedBySeasonObj[seasonNum] = []
  }

  groupedBySeasonObj[seasonNum].push(ep)
})

const groupedBySeason = Object.entries(groupedBySeasonObj).map(
  ([season, episodes]) => ({
    season: Number(season),
    episodes: episodes.map((ep, index) => ({
      title: ep.name,
      description: ep.air_date,
      thumbnail: ep.characters?.[0]?.image || '',
      duration: `Episode ${index + 1}`,
    })),
  })
)



console.log(groupedBySeason)

  return (
    <div className="App relative min-h-screen text-white bg-black">

      <Header />

      <NetflixTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <VideoDetails episodeId={selectedEpisodeId} />

      <div className="px-8 pb-20 mt-12">
        {activeTab === 'Episodes' && (
          <>
            <h2 className="text-3xl font-bold mb-6">Episodes</h2>
            <NetflixEpisodes seasonsData={groupedBySeason} />
          </>
        )}
        {activeTab === 'Trailers' && <p className="text-gray-400">Trailers coming soon...</p>}
        {activeTab === 'More to Watch' && <p className="text-gray-400">Explore more shows...</p>}
        {activeTab === 'Plans' && <p className="text-gray-400">Membership plans from ₹149/month.</p>}
      </div>
    </div>
  );
};

export default App;
