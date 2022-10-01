import { Flex } from '@chakra-ui/react';

import { Header } from 'components';

function App() {
  return (
    <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
      <Header />
    </Flex>
  );
}

export default App;
