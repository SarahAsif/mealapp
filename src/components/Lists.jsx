import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  Image,
  Heading,
  Stack,
  StackDivider,
  Center,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Lists = props => {
  const { onAddToCart, image, name, description, price, quantity } = props;

  return (
    <Center>
      <Card w="80vw" my={'3%'} p="4">
        <Flex d="flex" flexDirection="row" alignItems={'center'} gap="7">
          <Image
            src={image}
            w="200px"
            h="200px"
            objectFit="cover"
            borderRadius="full"
          />
          <Box>
            <Heading size="md"> {name}</Heading>
            <Box>
              <Text pt="2" fontSize="md">
                {description}
              </Text>
            </Box>
          </Box>
          <Flex flex="1" justifyContent="flex-end" alignItems={'center'}>
            <Text fontSize="xl" m="30" fontWeight="bold">
              {price + '$'}
            </Text>
            <Text fontSize="xl" m="30" fontWeight="bold">
              Quantity: {quantity || 1}
            </Text>
            <Button onClick={() => onAddToCart()}>Add to Cart</Button>
          </Flex>
        </Flex>
      </Card>
    </Center>
  );
};

export default Lists;
