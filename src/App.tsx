import { Box } from '@chakra-ui/react';
import { Header } from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home, MoviePage } from 'pages';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const MoviePage = React.lazy(() => import('./pages/MoviePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Box w='100%' my='6' maxW={1480} mx='auto' px='6'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MoviePage />} />
          </Routes>
        </Box>
      </Router>
    </Suspense>
  );
}

export default App;
