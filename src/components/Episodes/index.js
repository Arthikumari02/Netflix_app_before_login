import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../../graphql/queries';
import './EpisodeList.css';

const EpisodeList = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading episodes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="episode-list">
      <h2>Episodes</h2>
      <div className="episode-grid">
        {data.episodes.results.map((episode) => (
          <div key={episode.id} className="episode-card">
            <h3>{episode.name}</h3>
            <p className="episode-code">{episode.episode}</p>
            <p className="characters">
              {episode.characters.slice(0, 3).map(char => char.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
