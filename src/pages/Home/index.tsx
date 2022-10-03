import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Skeleton } from '@chakra-ui/react';
import { MovieItem } from 'components';
import { usePopularMovies } from 'services/hooks/usePopularMovies';
import { useDispatch } from 'react-redux';
import { selectMovie } from 'reducers';
import { api } from 'services/api';
import { TypeMovie } from 'services/hooks/usePopularMovies';

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Array<TypeMovie>>([]);

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = usePopularMovies();

  const dispatch = useDispatch();
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting && !isFetching && !isFetchingNextPage) {
        setPage((old) => {
          console.log(old);
          return old + 1;
        });
      }
    }, options);

    if (loadMoreRef.current && hasNextPage) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  useEffect(() => {
    fetchNextPage({ pageParam: page });
  }, [page]);

  useEffect(() => {
    const allMovies = data?.pages.map((el) => el.movies).flat();
    setMovies(allMovies ?? []);
  }, [data]);

  if (isLoading) {
    return (
      <Grid
        gap='10'
        gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
        mt='20'
        alignItems='center'
      >
        {Array.from(Array(10).keys()).map((_, idx) => (
          <Box key={idx}>
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

  const onSelectMovie = async (id: number) => {
    dispatch(selectMovie(id));
  };

  return (
    <Grid
      gap='10'
      gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
      mt='20'
      alignItems='center'
    >
      {movies.map((movie) => (
        <MovieItem
          key={`${movie.id}`}
          description={movie.overview}
          image={movie.poster_path}
          id={movie.id}
          title={movie.title}
          rate={movie.vote_average}
          onClick={() => onSelectMovie(movie.id)}
        />
      ))}
      {<p ref={loadMoreRef}>Carregando mais episodios...</p>}
    </Grid>
  );
};

export default Home;
