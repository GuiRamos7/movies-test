import { Flex, Icon, Input } from '@chakra-ui/react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import useDebounce from 'utils/useDebounce';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce<string>(searchValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log('bala');
  }, [debouncedValue]);

  return (
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
        placeholder='Search on the platform'
        _placeholder={{ color: 'gray.400' }}
        onChange={handleChange}
      />
      <Icon as={RiSearchLine} fontSize='20' />
    </Flex>
  );
};

export default SearchBox;
