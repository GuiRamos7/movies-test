import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Guilherme Ramos</Text>
          <Text color='gray.300' fontSize='small'>
            guiramos10@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Gui Ramos'
        src='https://github.com/GuiRamos7.png'
        bg='pink.500'
      />
    </Flex>
  );
};

export default Profile;
