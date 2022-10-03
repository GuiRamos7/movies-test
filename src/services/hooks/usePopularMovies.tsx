import { useInfiniteQuery } from 'react-query';
import { api } from 'services/api';

export type TypeMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
};

type GetPopularMoviesResponse = {
  movies: Array<TypeMovie>;
};

const getPopularMovies = async ({ pageParam }: any) => {
  const {
    data: { page, results, total_pages },
  } = await api.get(`/movie/popular`, {
    params: { page: pageParam ?? 1 },
  });
  const movies = results.map((movie: TypeMovie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));

  return { page, movies, total_pages };
};

export const usePopularMovies = () => {
  return useInfiniteQuery('popularMovies', getPopularMovies, {
    getNextPageParam: (lastPage, pages) => ({ lastPage, pages }),
    staleTime: 1000 * 60 * 15,
    retry: false,
  });
};
