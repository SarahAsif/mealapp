import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, theme, Flex, Modal } from '@chakra-ui/react';
import Nav from './components/Nav';
import PopModal from './components/PopModal';
import Main from './components/Main';
import Lists from './components/Lists';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CongratulationsPage from './components/CongratulationsPage';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control modal visibility
  const addToCart = item => {
    // Check if the item already exists in the cart
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    // If item exists in the cart, increase its quantity
    if (itemIndex !== -1) {
      setCart(prevCart => {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      });
    } else {
      // If item does not exist in the cart, add it with quantity 1
      const newItem = {
        ...item,
        quantity: 1,
      };
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    }
  };
  useEffect(() => {
    axios
      .get('https://mocki.io/v1/507072e6-9e72-4314-bf0c-d1a9ffd3a0cd')
      .then(resp => setData(resp.data));
  }, []);
  const openCartModal = () => {
    setIsCartOpen(true);
  };
  const closeCartModal = () => {
    setIsCartOpen(false);
  };
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex flexDirection="column">
          <Box textAlign="center" fontSize="xl">
            <Nav cart={cart} openCartModal={openCartModal} />
          </Box>
          <Routes>
            <Route path="/congratulations" element={<CongratulationsPage />} />
            <Route path="/" element={<Main />} />
          </Routes>
          <PopModal
            isOpen={isCartOpen}
            onClose={closeCartModal}
            cart={cart}
            setCart={setCart}
          />
          {data.map(item => (
            <Lists
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
