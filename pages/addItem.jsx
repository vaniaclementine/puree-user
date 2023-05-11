import { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }
}

export default Cart;