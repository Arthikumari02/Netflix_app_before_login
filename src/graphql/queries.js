import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`

export const GET_EPISODE_DETAILS = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      air_date
      episode
      characters {
        id
        name
        image
        gender
        origin {
          name
        }
      }
    }
  }
`

export const LOCATIONS = gql`
  query GetLocations($id: ID) {
    location(id: $id) {
      residents {
        id
        name
        episode
        created
        gender
        image
        origin
        species
        status
        type
      }
      created
      dimension
      id
      name
    }
  }
`