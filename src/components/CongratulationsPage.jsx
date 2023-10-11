import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const CongratulationsPage = () => {
  return (
    <Box textAlign="center" pt="20">
      <Heading as="h1" size="xl">
        Congratulations! Your order has been placed.
      </Heading>
    </Box>
  );
};

export default CongratulationsPage;
