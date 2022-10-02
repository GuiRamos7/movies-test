import { Flex, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiBookmark, HiOutlineX, HiPlay } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';
import type { RootState } from 'config/store';
import { addFavorites, removeFavorites } from 'reducers';
import { useGetMovieDetails } from 'services/hooks/useGetMovieDetails';
import { convertDate } from 'utils/convertData';
import './styles.css';

const MoviePage = () => {
  const movieID = useSelector((state: RootState) => state.movies.movieSelected);
  const { data, isLoading, isError } = useGetMovieDetails(movieID ?? 0);
  const favorites = useSelector((state: RootState) => state.movies.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = data?.movie.genres.map((el) => el.name).join(', ');

  const isFavorite = useCallback(() => {
    const moviesIsFavorite = favorites.find((el) => el.id === movieID);

    return moviesIsFavorite;
  }, [favorites]);

  if (isError) {
    navigate('/');
  }

  return (
    <Flex
      w='100%'
      mt='10'
      p='20'
      className='cover-image '
      backgroundImage={`https://image.tmdb.org/t/p/original/${data?.movie.backdrop_path}`}
      flexDirection='column-reverse'
      zIndex='1'
      backgroundSize='cover'
    >
      <div className='gradient' />
      <Flex
        position='relative'
        zIndex='2'
        mt='auto'
        w='100%'
        my='6'
        maxW={1480}
        mx='auto'
        px='6'
        direction='column'
      >
        <Text fontSize='5xl' color='white' fontWeight='bold'>
          {data?.movie.title}
        </Text>
        <Flex align='center'>
          <Flex align='center'>
            <AiFillStar fill='#ffd200' fontSize='25px' />
            <Text as='p' fontSize='xl' ml='2'>
              {data?.movie.vote_average} | {data?.movie.vote_count}
            </Text>
          </Flex>
          <Flex ml='10'>
            <Text as='p' fontSize='xl' ml='2'>
              {data?.movie.runtime}min &#8226; {genres} &#8226;{' '}
              {convertDate(data?.movie.release_date ?? '')}
            </Text>
          </Flex>
        </Flex>
        <Flex w='70%' mt='10' fontSize='2xl'>
          {data?.movie.overview}
        </Flex>
        <Flex mt='10'>
          <Button
            mr='5'
            leftIcon={<HiPlay />}
            bg='blue.500'
            fontSize='xl'
            fontWeight='normal'
          >
            Play now
          </Button>
          <Button
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
      </Flex>
    </Flex>
  );
};

export default React.memo(MoviePage);
