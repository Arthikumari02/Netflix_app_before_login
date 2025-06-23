import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
        characters {
          id
          name
          image
        }
      }
    }
  }
`

export const GET_EPISODE_DETAILS = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
      characters {
        id
        name
        image
        gender
        status
        origin {
          name
        }
        location{
          name
        }
      }
    }
  }
`

export const UPDATE_EPISODE = gql`
  mutation UpdateEpisode($id: ID!, $input: EpisodeUpdateInput!) {
    updateEpisode(id: $id, input: $input) {
      id
      title
      genres
      description
      audio
      subtitles
      tags
      rating
    }
  }
`
