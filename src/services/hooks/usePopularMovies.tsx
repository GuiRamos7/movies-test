import { useQuery } from 'react-query';
import { api } from 'services/api';

type Movie = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
};

type GetPopularMoviesResponse = {
  movies: Array<Movie>;
};

export const getPopularMovies = async (): Promise<GetPopularMoviesResponse> => {
  const { data } = await api.get('/movie/popular');

  const movies = data.results.map((movie: Movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));

  return { movies };
};

export const usePopularMovies = () => {
  return useQuery('popularMovies', () => getPopularMovies(), {
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
};
