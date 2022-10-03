import { useMutation, useQuery } from 'react-query';
import { api } from 'services/api';

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
};

type SearchMoviesResponse = {
  movies: Array<Movie>;
};

export const searchMovies = async (search: string): Promise<any> => {
  const { data } = await api.get('/search/movie', {
    params: { query: 'Orphan: First Kill' },
  });

  console.log(data);

  // const movies = data.results.map((movie: Movie) => ({
  //   id: movie.id,
  //   title: movie.title,
  //   overview: movie.overview,
  //   poster_path: movie.poster_path,
  //   vote_average: movie.vote_average,
  // }));

  return {};
};

export const useSearchMovies = () => {
  return useMutation(
    'searchMovies',
    (search: string) => searchMovies(search),
    {}
  );
};
