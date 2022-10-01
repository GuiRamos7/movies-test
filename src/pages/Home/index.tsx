import { useEffect, useState } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { MovieItem } from 'components';
import { api } from 'services/api';

interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  useEffect(() => {
    api.get('/movie/popular').then((mv) => {
      setMovies(mv.data.results);
    });
  }, []);
  return (
    <Grid
      gap='10'
      gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
      mt='20'
    >
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          description={movie.overview}
          image={movie.poster_path}
          id={movie.id}
          title={movie.title}
          rate={movie.vote_average}
        />
      ))}
    </Grid>
  );
};

export default Home;
