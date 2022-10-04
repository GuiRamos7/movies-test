import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { RootState } from 'config/store';
import { motion } from 'framer-motion';
import { RiBookmarkLine, RiNotificationLine } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
import { useSelector } from 'react-redux';

const NotificationNav = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.movies.favorites
  );

  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color='gray.300'
      borderRightWidth={1}
      borderColor='gray.700'
    >
      <Box
        p='0'
        m='0'
        h='20px'
        w='20px'
        position='relative'
        top='-2px'
        right='0'
      >
        <Menu>
          <MenuButton>
            <Icon as={RiBookmarkLine} fontSize='20' />
          </MenuButton>
          {favoriteMovies.length > 0 && (
            <MenuList
              w='450px'
              maxH='600px'
              bg='gray.800'
              border='none'
              zIndex='10'
              overflow='auto'
            >
              {favoriteMovies.map((movie) => (
                <MenuItem>
                  <a href={`/movie/${movie.id}`}>
                    <Flex align='center'>
                      <Image
                        w='40px'
                        src={`https://image.tmdb.org/t/p/original/${movie.image}`}
                      />
                      <Text
                        flex='1'
                        ml='3'
                        fontSize='xl'
                        fontWeight='bold'
                        w='100%'
                      >
                        {movie.title}
                      </Text>
                    </Flex>
                  </a>
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Menu>
        {favoriteMovies.length > 0 && (
          <motion.div
            animate={{
              scale: [0, 1.2, 1],
            }}
            style={{
              position: 'absolute',
              right: '7px',
              top: '-2px',
            }}
            transition={{ duration: 0.5 }}
          >
            <Box
              w='2'
              h='2'
              borderRadius='100%'
              bg='pink.500'
              position='absolute'
            />
          </motion.div>
        )}
      </Box>
      <Icon as={RiNotificationLine} fontSize='20' />
    </HStack>
  );
};

export default NotificationNav;
