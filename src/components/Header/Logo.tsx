import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight='bold'
        letterSpacing='tight'
        w='64'
      >
        Movies
        <Text as='span' fontSize='5xl' color='pink.500'>
          .
        </Text>
        io
      </Text>
    </Link>
  );
};

export default Logo;
