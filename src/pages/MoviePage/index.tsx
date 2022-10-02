import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@chakra-ui/react';
import { HiBookmark, HiPlay } from 'react-icons/hi';

import { useGetMovieDetails } from 'services/hooks/useGetMovieDetails';
import type { RootState } from 'config/store';
import './styles.css';
import { AiFillStar } from 'react-icons/ai';
import { convertDate } from 'utils/convertData';

const MoviePage = () => {
  const count = useSelector((state: RootState) => state.movies.movieSelected);
  const { data, isLoading, isError } = useGetMovieDetails(count ?? 0);
  const navigate = useNavigate();

  console.log(isError);

  if (isError) {
    navigate('/');
  }

  const genres = data?.movie.genres.map((el) => el.name).join(', ');

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
            height='48px'
            width='240px'
            fontSize='xl'
            fontWeight='normal'
            _hover={{
              opacity: 0.7,
            }}
          >
            Play now
          </Button>
          <Button
            bg='gray.100'
            height='48px'
            width='240px'
            fontWeight='normal'
            fontSize='xl'
            _hover={{
              opacity: 0.7,
            }}
            leftIcon={<HiBookmark />}
          >
            Save on your list
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default React.memo(MoviePage);
