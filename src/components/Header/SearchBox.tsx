import { Flex, Icon, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { RiSearchLine, RiCloseFill } from 'react-icons/ri';
import { useSearchMovies } from 'services/hooks/useSearchMovies';
import { getYear } from 'utils/convertData';
import useDebounce from 'utils/useDebounce';
import { Loading } from 'components';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce<string>(searchValue);
  const { data, mutate, isLoading } = useSearchMovies();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    if (searchValue.length > 1) {
      mutate(searchValue);
    }
  }, [debouncedValue, mutate, searchValue]);

  return (
    <>
      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          value={searchValue}
          placeholder='Search on the platform'
          _placeholder={{ color: 'gray.400' }}
          onChange={handleChange}
        />
        {searchValue.length === 0 ? (
          <Icon as={RiSearchLine} fontSize='20' />
        ) : (
          <Icon
            cursor='pointer'
            as={RiCloseFill}
            fontSize='20'
            onClick={() => setSearchValue('')}
          />
        )}
        {data?.movies.length !== 0 && searchValue.length !== 0 && (
          <Flex
            position='absolute'
            top='100%'
            mt='2'
            bg='gray.800'
            w='100%'
            py='4'
            left='0'
            borderRadius='10'
            maxH='500px'
            overflow='auto'
            flexDirection='column'
            zIndex='5'
          >
            {data?.movies.map((movie) => (
              <a href={`/movie/${movie.id}`}>
                <Flex
                  px='8'
                  key={movie.id}
                  _hover={{ background: 'gray.700' }}
                  w='100%'
                >
                  <Flex py='2' justify='space-between' w='100%'>
                    <Text>{movie.title}</Text>
                    <Text>{getYear(movie.release_date)}</Text>
                  </Flex>
                </Flex>
              </a>
            ))}

            {isLoading && (
              <Flex justify='center'>
                <Loading />
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default SearchBox;
