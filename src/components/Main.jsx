import { Box, Text, Center } from '@chakra-ui/react';
import React from 'react';

const Main = () => {
  return (
    <Center>
      <Box
        h="50vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={'6%'}
        w="100vw"
        bg="rgba(255,0,0,0.1)"
        bgImage="url(https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)"
        bgSize="cover "
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Text color="green.900" fontSize={'6xl'}>
          {' '}
          Order Your Meal
        </Text>
        <Text fontSize={'md'} fontWeight={'bold'}>
          Choose your Items below
        </Text>
      </Box>
    </Center>
  );
};

export default Main;
