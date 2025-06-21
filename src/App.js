import React, { useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from './graphql/queries';
import Header from './components/Header';
import NetflixTabs from './components/Tabs';
import VideoDetails from './components/VideoDetails';
import NetflixEpisodes from './components/Episodes';
import EpisodeModal from './components/Episodes/EpisodeModel';
import HorizontalCarousel from './components/HorizontalItems';
import PricingPlans from './components/Plans';
import FooterWithJoinButton from './components/Footer';
import './App.css';

const trendingList = [
  {
    title: 'Andor (S2)',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499337/andor-ricojr_wuhody.png',
  },
  {
   title: 'The Great Indian Kapil Show S3',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499466/250px-The_Great_Indian_Kapil_Show_bw5q1p.jpg',
  },
  {
    title: 'Rana Naidu S2',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499491/Rana_20Naidu_20Season_202_av7ztb.jpg',
  },
  {
    title: 'Delhi Crime',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499572/maxresdefault_a2alri.jpg',
  },
  {
    title: 'Jaat',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499564/Jaat_film_poster_jm2v2w.jpg',
  },
  {
    title: 'Kesari Chapter 2',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499543/250px-Kesari_Chapter_2_cyczlf.jpg',
  },
  {
    title : 'The Family Man S3',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499507/121467341_eb8uyy.jpg'
  },
  {
     title: 'Khauf',
    thumbnail: 'https://res.cloudinary.com/dft7fsze1/image/upload/v1750499767/Khauf_poster_pry8no.jpg', 
  }
];

const App = () => {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  const [activeTab, setActiveTab] = useState('Episodes');
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(1);

  const episodesRef = useRef(null);
  const trailersRef = useRef(null);
  const moreRef = useRef(null);
  const plansRef = useRef(null);

  const tabs = ['Trailers', 'Episodes', 'More to Watch', 'Plans'];

  if (loading) return <p>Loading episodes...</p>;
  if (error) return <p>Error loading episodes</p>;


  const handleTabClick = (tab) => {
  setActiveTab(tab);

  setTimeout(() => {
    const sectionMap = {
      Episodes: episodesRef,
      Trailers: trailersRef,
      'More to Watch': moreRef,
      Plans: plansRef,
    };

    sectionMap[tab]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
};

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
      id: ep.id,
      title: ep.name,
      description: "Aliens send Rick, Morty and Jerry into an alternate reality. Rick tries to get them out while Jerry pitches a marketing slogan for apples.",
      thumbnail: ep.characters?.[0]?.image || '',
    })),
  })
)

const recommendedList = data.episodes.results
  .filter((ep, index) => index < 6)
  .map(ep => ({
    id: ep.id,
    title: ep.name,
    thumbnail: ep.characters?.[0]?.image || '',
  }));

  return (
    <div className="App relative min-h-screen text-white">
      <Header />
      <NetflixTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={handleTabClick}
      />
      <VideoDetails episodeId={selectedEpisodeId} />
     <div className="px-8 pb-5 mt-10">
        <div ref={episodesRef} className="my-section">
          <NetflixEpisodes seasonsData={groupedBySeason}   
            onEpisodeClick={setSelectedEpisodeId}
          />
          {selectedEpisodeId && (
            <EpisodeModal
              episodeId={selectedEpisodeId}
              onClose={() => setSelectedEpisodeId(null)}
            />
          )}
        </div>

        <div ref={moreRef} className="my-section mt-12">
          <HorizontalCarousel id="you-might-like" title="You Might Also Like" items={recommendedList} />
          <HorizontalCarousel title="Trending Now" items={trendingList} />
        </div>

        <div ref={plansRef} className="my-section mt-1">
          <PricingPlans id="plans" />
        </div>
      </div>
      <FooterWithJoinButton />
    </div>
  );
};

export default App;
