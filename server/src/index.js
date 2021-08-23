const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSourcs: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀 Server is running!
    🔊 listening on port 4000
    📭 Query at https://studio.apollographql.com/dev
  `);
});
