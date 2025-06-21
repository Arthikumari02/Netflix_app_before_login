import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODE_DETAILS } from '../../graphql/queries';
import { X } from 'lucide-react';

const EpisodeModal = ({ episodeId, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { data, loading, error } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId },
    skip: !episodeId,
  });

  if (loading) return null;
  if (error || !data?.episode) return null;

  const episode = data.episode;
  const characters = episode.characters || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-5xl p-6 relative text-white">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-white hover:text-red-500" />
        </button>

        <h2 className="text-3xl font-bold mb-4">{episode.name}</h2>
        <div className="flex border-b border-gray-700 mb-4">
          {['info', 'characters'].map(tab => (
            <button
              key={tab}
              className={`px-6 py-2 font-medium ${activeTab === tab ? 'text-white border-b-2 border-red-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'info' && (
          <div className="space-y-2">
            <p><strong>Air Date:</strong> {episode.air_date}</p>
            <p><strong>Episode Code:</strong> {episode.episode}</p>
            <p><strong>Total Characters:</strong> {characters.length}</p>
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="h-[70vh] grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 overflow-x-scroll">
            {characters.map(char => (
              <div
                key={char.id}
                className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
                onClick={() => setSelectedCharacter(char)}
              >
                <img src={char.image} alt={char.name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold">{char.name}</h3>
                <p className="text-sm text-gray-400">{char.gender} • {char.status}</p>
              </div>
            ))}
          </div>
        )}

        {selectedCharacter && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg relative max-w-md w-full">
              <button onClick={() => setSelectedCharacter(null)} className="absolute top-2 right-2">
                <X className="w-5 h-5 text-white" />
              </button>
              <img src={selectedCharacter.image} className="w-32 h-32 rounded-full mx-auto mb-4" alt={selectedCharacter.name} />
              <h3 className="text-xl font-bold text-center">{selectedCharacter.name}</h3>
              <p className="text-center text-gray-300 mt-2">{selectedCharacter.gender} • {selectedCharacter.status}</p>
              <p className="text-sm mt-4"><strong>Origin:</strong> {selectedCharacter.origin?.name || 'Unknown'}</p>
              <p className="text-sm"><strong>Location:</strong> {selectedCharacter.location?.name || 'Unknown'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeModal;
