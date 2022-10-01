import { Box, Flex, Grid } from '@chakra-ui/react';

import { Header, MovieIcon } from 'components';

function App() {
  return (
    <Box w='100%' my='6' maxW={1480} mx='auto' px='6'>
      <Header />
      <Grid gap='20' gridTemplateColumns='repeat(3, 250px)' mt='20'></Grid>
    </Box>
  );
}

export default App;
