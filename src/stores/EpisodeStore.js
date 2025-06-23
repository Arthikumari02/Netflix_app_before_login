import { makeAutoObservable } from 'mobx';

class EpisodeStore {
  selectedEpisodeId = 1;
  modalEpisodeId = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedEpisodeId = (id) => {
    this.selectedEpisodeId = id;
    this.modalEpisodeId = id;
  }

  closeModal() {
    this.modalEpisodeId = null;
  }
}

export const episodeStore = new EpisodeStore();
