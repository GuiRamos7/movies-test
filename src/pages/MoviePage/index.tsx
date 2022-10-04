import { Flex, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiBookmark, HiOutlineX, HiPlay } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from 'components';
import type { RootState } from 'config/store';
import { addFavorites, removeFavorites } from 'reducers';
import { useGetMovieDetails } from 'services/hooks/useGetMovieDetails';
import { convertDate } from 'utils/convertData';
import './styles.css';

const MoviePage = () => {
  const movieID = useSelector((state: RootState) => state.movies.movieSelected);
  const { data, isError } = useGetMovieDetails(
    window.location.pathname.split('/')[2] ?? movieID
  );
  const favorites = useSelector((state: RootState) => state.movies.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = data?.movie.genres.map((el) => el.name).join(', ');

  const isFavorite = useCallback(() => {
    const moviesIsFavorite = favorites.find((el) => el.id === movieID);

    return moviesIsFavorite;
  }, [favorites, movieID]);

  if (isError) {
    navigate('/');
  }

  return (
    <Flex
      w='100%'
      mt='10'
      p={['5', '10', '20']}
      className='cover-image '
      backgroundImage={`https://image.tmdb.org/t/p/original/${data?.movie.backdrop_path}`}
      flexDirection={['column', 'column-reverse', 'column-reverse']}
      zIndex='1'
      backgroundSize='cover'
    >
      <div className='gradient' />
      <Flex
        position='relative'
        zIndex='2'
        mt={'auto'}
        w='100%'
        my='6'
        maxW={1480}
        mx='auto'
        px={['0', '0', '6']}
        direction='column'
      >
        <motion.div
          initial={{ opacity: 0, x: '-50px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            fontSize={['3xl', '4xl', '5xl']}
            color='white'
            fontWeight='bold'
          >
            {data?.movie.title}
          </Text>

          <Flex
            align={['start', 'start', 'center']}
            flexDirection={['column', 'column', 'row']}
          >
            <Flex align='center'>
              <AiFillStar fill='#ffd200' fontSize='25px' />
              <Text as='p' fontSize='xl' ml='2'>
                {data?.movie.vote_average} | {data?.movie.vote_count}
              </Text>
            </Flex>
            <Flex ml={['0', '0', '10']}>
              <Text as='p' fontSize={['md', 'lg', 'xl']} ml='2'>
                {data?.movie.runtime}min &#8226; {genres} &#8226;{' '}
                {convertDate(data?.movie.release_date ?? '')}
              </Text>
            </Flex>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: '-80px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            w={['100%', '100%', '70%']}
            mt='10'
            fontSize={['lg', 'xl', '2xl']}
          >
            {data?.movie.overview}
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '-120px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex mt='10' flexDirection={['column', 'column', 'row']}>
            <Button
              mr='5'
              leftIcon={<HiPlay />}
              bg='blue.500'
              fontSize='xl'
              mt='5'
              fontWeight='normal'
            >
              Play now
            </Button>
            <Button
              mt='5'
              fontWeight='normal'
              fontSize='xl'
              leftIcon={!isFavorite() ? <HiBookmark /> : <HiOutlineX />}
              bg={!isFavorite() ? 'gray.100' : 'orange.500'}
              onClick={() =>
                !isFavorite()
                  ? dispatch(
                      addFavorites({
                        title: data?.movie.title ?? '',
                        image: data?.movie.poster_path ?? '',
                        id: movieID ?? 0,
                      })
                    )
                  : dispatch(removeFavorites(movieID ?? 0))
              }
            >
              {!isFavorite() ? 'Save on your list' : 'Remove from your list'}
            </Button>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default React.memo(MoviePage);
