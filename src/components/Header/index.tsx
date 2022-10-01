import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import SearchBox from './SearchBox';
import NotificationNav from './NotificationNav';
import Profile from './Profile';
import Logo from './Logo';
// import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const onOpen = false;

  return (
    <Flex
      maxWidth={1480}
      as='header'
      w='100%'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='baseline'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          mr='2'
          onClick={() => {}}
          fontSize='24'
          variant='unstyled'
          icon={<Icon as={RiMenuLine} />}
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
