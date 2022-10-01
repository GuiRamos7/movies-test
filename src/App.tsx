import { Box } from '@chakra-ui/react';
import { Header } from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'pages';

function App() {
  return (
    <Router>
      <Box w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
