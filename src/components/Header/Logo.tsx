import { Text } from '@chakra-ui/react';

const Logo = () => {
  return (
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
  );
};

export default Logo;
