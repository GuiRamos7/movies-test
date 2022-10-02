import { Button as UIButton } from '@chakra-ui/react';
import { ButtonProps } from '@chakra-ui/react';

const Button = ({ ...props }: ButtonProps) => {
  return (
    <UIButton
      {...props}
      height='48px'
      minWidth='240px'
      w='auto'
      _hover={{
        opacity: 0.7,
      }}
    ></UIButton>
  );
};

export default Button;
