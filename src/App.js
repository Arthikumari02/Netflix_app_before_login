import { useRef, useState ,useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from './graphql/queries';
import Header from './components/Header';
import Tabs from './components/Tabs';
import VideoDetails from './components/VideoDetails';
import Episode from './components/Episodes';
import EpisodeModal from './components/Episodes/EpisodeModel';
import MoreToWatch from './components/MoreToWatch';
import PricingPlans from './components/Plans';
import FooterWithJoinButton from './components/Footer';
import { episodeStore } from './stores/EpisodeStore';
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

  const [activeTab, setActiveTab] = useState('');

  const episodesRef = useRef(null);
  const moreRef = useRef(null);
  const plansRef = useRef(null);

  const groupedBySeason = useMemo(() => {
    if (!data?.episodes?.results) return [];

    const groupedBySeasonObj = {};

    data.episodes.results.forEach((ep) => {
      const seasonNum = parseInt(ep.episode.slice(1, 3));
      if (!groupedBySeasonObj[seasonNum]) {
        groupedBySeasonObj[seasonNum] = [];
      }

      groupedBySeasonObj[seasonNum].push(ep);
    });

    return Object.entries(groupedBySeasonObj).map(([season, episodes]) => ({
      season: Number(season),
      episodes: episodes.map((ep) => {
        const randomCharacter =
          ep.characters && ep.characters.length > 0
            ? ep.characters[Math.floor(Number(ep.id) % ep.characters.length)]
            : null;

        return {
          id: ep.id,
          title: ep.name,
          description:
            'Aliens send Rick, Morty and Jerry into an alternate reality...',
          thumbnail: randomCharacter?.image || '',
        };
      }),
    }));
  }, [data]);

  if (loading) return <p>Loading episodes...</p>;
  if (error) return <p>Error loading episodes</p>;


  const tabs = ['Episodes', 'More to Watch', 'Plans'];

  const handleTabClick = (tab) => {
  setActiveTab(tab);

  setTimeout(() => {
    const sectionMap = {
      Episodes: episodesRef,
      'More to Watch': moreRef,
      Plans: plansRef,
    };

    sectionMap[tab]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
};

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
      <Tabs 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={handleTabClick}
      />
      <VideoDetails episodeId={episodeStore.selectedEpisodeId} />
     <div className="md:px-8 md:pb-3 mt-10">
        <div ref={episodesRef} className="md:mx-[8%]">
          <Episode seasonsData={groupedBySeason}   
            onEpisodeClick={(id) => episodeStore.setSelectedEpisodeId(id)}
          />
         {episodeStore.modalEpisodeId && (
            <EpisodeModal
              episodeId={episodeStore.modalEpisodeId}
              onClose={() => episodeStore.closeModal()}
            />
          )}
        </div>

        <div ref={moreRef} className="md:mx-[7%] mt-12">
          <MoreToWatch title="You Might Also Like" items={recommendedList} />
          <MoreToWatch title="Trending Now" items={trendingList} />
        </div>

        <div ref={plansRef} className="md:mx-[7%] mt-1">
          <PricingPlans id="plans" />
        </div>
      </div>
      <FooterWithJoinButton />
    </div>
  );
};

export default observer(App);
