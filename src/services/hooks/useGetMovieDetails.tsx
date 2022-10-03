import { useQuery } from 'react-query';
import { api } from 'services/api';

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
  genres: Array<Genre>;
  backdrop_path: string;
  runtime: number;
  release_date: string;
  vote_count: number;
};

type GetMovieDetailsResponse = {
  movie: Movie;
};

export const getMovieDetails = async (
  id: number
): Promise<GetMovieDetailsResponse> => {
  const { data } = await api.get(`/movie/${id}`);

  const movie = {
    id: data.id,
    title: data.title,
    overview: data.overview,
    poster_path: data.poster_path,
    vote_average: data.vote_average,
    genres: data.genres,
    backdrop_path: data.backdrop_path,
    runtime: data.runtime,
    release_date: data.release_date,
    vote_count: data.vote_count,
  };

  return { movie };
};

export const useGetMovieDetails = (id: number) => {
  return useQuery('movie', () => getMovieDetails(id), {
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60,
    retry: false,
  });
};
