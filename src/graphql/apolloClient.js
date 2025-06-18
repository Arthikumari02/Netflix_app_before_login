import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/explorer',
  cache: new InMemoryCache(),
});

export default client;