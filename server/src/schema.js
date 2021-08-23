const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
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
    "The tracks complete description, can be in markdown format"
    description: String
    "the number of times a track has been viewed"
    numberOfView: Int
    "the tracks complete array of modules"
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compse a track"
  type Module {
    id: ID!
    "The modules title"
    title: String!
    "The modules length in minutes"
    length: Int
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
