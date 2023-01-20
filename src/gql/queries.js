import { gql } from "@apollo/client";

export const FIND_ALL_MOVIES = gql`
query FindAllMovies($query: MovieQueryInput!) {
  findAllMovies(query: $query) {
    count
    items {
      id
      adult
      title
      overview
      posterPath
      originalLanguage
      releaseDate
      voteAverage
      voteCount
    }
  }
}
`;

export const FIND_ONE_MOVIE = gql`
query FindOneMovie($findOneMovieId: String!) {
  findOneMovie(id: $findOneMovieId) {
    id
    adult
    title
    overview
    posterPath
    originalLanguage
    releaseDate
    voteAverage
    voteCount
  }
}
`;
