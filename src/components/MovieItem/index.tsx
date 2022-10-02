import { Flex, Image, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.css';

interface IMovieIcon {
  id: number;
  title: string;
  description: string;
  image: string;
  rate: string;
  onClick: () => void;
}

const MovieItem = ({
  id,
  title,
  description,
  image,
  rate,
  onClick,
}: IMovieIcon) => {
  return (
    <Link to={`/movie/${id}`} onClick={onClick}>
      <Flex direction='column' borderRadius='17px' w='250px' m='auto'>
        <Image
          borderRadius='17px'
          src={`https://image.tmdb.org/t/p/original/${image}`}
          loading='lazy'
          alt={`Poster of ${title} movie`}
          w='250px'
          h='375'
        />
        <Text as='h1' fontSize='xl' fontWeight='700' mt='2' h='45'>
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
    </Link>
  );
};

export default MovieItem;
