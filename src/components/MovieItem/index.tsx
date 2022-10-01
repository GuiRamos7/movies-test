import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.css';

interface IMovieIcon {
  id: string;
  title: string;
  description: string;
  image: string;
  rate: string;
}

const MovieItem = ({ id, title, description, image, rate }: IMovieIcon) => {
  return (
    // <Link to={`/movie/${id}`}>
    <Flex direction='column' borderRadius='17px' w='250px'>
      <Image
        borderRadius='17px'
        src={`https://image.tmdb.org/t/p/original/${image}`}
        loading='lazy'
      />
      <Text as='h1' fontSize='2xl' fontWeight='700' mt='2'>
        {title}
      </Text>
      <Text
        className='description'
        as='h1'
        fontSize='xl'
        py='2'
        lineHeight='1.7'
      >
        {description}
      </Text>
      <Flex align='center'>
        <AiFillStar fill='#ffd200' fontSize='25px' />
        <Text as='p' fontSize='xl' fontWeight='700' ml='2'>
          {rate}
        </Text>
      </Flex>
    </Flex>
    // </Link>
  );
};

export default MovieItem;
