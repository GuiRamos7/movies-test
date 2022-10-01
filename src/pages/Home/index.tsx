import { useEffect, useState } from 'react';
import { Box, Flex, Grid, Skeleton } from '@chakra-ui/react';
import { MovieItem } from 'components';
import { api } from 'services/api';
import { usePopularMovies } from 'services/hooks/usePopularMovies';

interface IMovieIcon {
  id: string;
  title: string;
  description: string;
  image: string;
  rate: string;
}

const Home = () => {
  const { data, isLoading } = usePopularMovies();

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
        />
      ))}
    </Grid>
  );
};

export default Home;
