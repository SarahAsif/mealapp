import React, { useEffect, useState } from 'react';
import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  Divider,
  Center,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

// import CongratulationsPage from './CongratulationsPage';

const PopModal = props => {
  const { isOpen, onClose, cart, setCart } = props;
  const [total, setTotal] = useState(0);
  const calculate = () => {
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
      totalAmount += Math.floor(cart[i].price);
    }
    setTotal(totalAmount);
  };
  useEffect(() => {
    calculate();
  }, [cart, isOpen]);
  const navigate = useNavigate();

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Render the cart items inside the modal */}
            {cart.map(cartItem => (
              <Flex
                d="flex"
                flexDirection="row"
                justify="space-between"
                align="center"
                key={cartItem.id}
              >
                <div>{cartItem.quantity}</div>
                <div>{cartItem.name}</div>
                <Center textAlign="center">{cartItem.price}$</Center>
              </Flex>
            ))}
            <Divider />
            <Box
              fontWeight="extrabold"
              fontSize="22px"
              display="flex"
              flexDir="row"
              justifyContent="space-between"
            >
              <Box></Box>
              <Box>Total: </Box>
              <Box>{total}$</Box>
            </Box>
          </ModalBody>
          <ModalFooter gap="3">
            <Button onClick={onClose}>Close</Button>
            <Button onClick={() => setCart([])}>Empty Cart</Button>
            <Link to={'/congratulations'}>
              <Button>Checkout</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PopModal;
