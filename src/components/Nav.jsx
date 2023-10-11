import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

const Nav = props => {
  const totalItems = props.cart.length;
  return (
    <Flex
      flexDirection={'row'}
      bg="blackAlpha.900"
      alignItems="center"
      justifyContent="space-between"
      px="50"
    >
      <Center d="flex" justifyContent="space-between" w="100%" p="10px">
        <Link to={'/'}>
          <Box color="white" fontSize="2xl">
            Meals App
          </Box>
        </Link>
        <Box color="white">
          <Button onClick={props.openCartModal}>
            Total Items: {totalItems}
          </Button>
        </Box>
      </Center>
      <ColorModeSwitcher justifySelf="flex-end" color="white" />
    </Flex>
  );
};

export default Nav;
