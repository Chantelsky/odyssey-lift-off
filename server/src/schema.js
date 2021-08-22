const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]
  }
  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks author"
    author: Author!
    "the tracks main illustration to display in track card or track page detail"
    thumbnail: String
    "the tracks approx length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    id: ID!
    "the authors first and last name"
    name: String!
    "authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
