import { useEffect, useState } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { Header, MovieItem } from 'components';
import { api } from 'services/api';

interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
}

function App() {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  useEffect(() => {
    api.get('/movie/popular').then((el) => {
      setMovies(el.data.results);
    });
  }, []);

  return (
    <Box w='100%' my='6' maxW={1480} mx='auto' px='6'>
      <Header />
      <Grid
        gap='10'
        gridTemplateColumns='repeat( auto-fit, minmax(250px, 1fr) );'
        mt='20'
      >
        {movies.map((el) => (
          <MovieItem
            description={el.overview}
            image={el.poster_path}
            id={el.id}
            title={el.title}
            rate={el.vote_average}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
