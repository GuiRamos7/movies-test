import { Box, Grid, Skeleton } from '@chakra-ui/react';
import { MovieItem } from 'components';
import { usePopularMovies } from 'services/hooks/usePopularMovies';
import { useDispatch } from 'react-redux';
import { selectMovie } from 'reducers';

const Home = () => {
  const { data, isLoading } = usePopularMovies();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Grid
        gap='10'
        gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
        mt='20'
        alignItems='center'
      >
        {Array.from(Array(10).keys()).map(() => (
          <Box>
            <Skeleton height='375px' w='250px' fadeDuration={4} color='white' />
            <Skeleton
              mt='5'
              height='17px'
              w='250px'
              fadeDuration={4}
              color='white'
            />
            <Skeleton
              mt='5'
              height='17px'
              w='250px'
              fadeDuration={4}
              color='white'
            />
          </Box>
        ))}
      </Grid>
    );
  }

  return (
    <Grid
      gap='10'
      gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
      mt='20'
      alignItems='center'
    >
      {data?.movies.map((movie) => (
        <MovieItem
          key={movie.id}
          description={movie.overview}
          image={movie.poster_path}
          id={movie.id}
          title={movie.title}
          rate={movie.vote_average}
          onClick={() => dispatch(selectMovie(movie))}
        />
      ))}
    </Grid>
  );
};

export default Home;
