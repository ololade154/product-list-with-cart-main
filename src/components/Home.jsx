import { Cart } from './Cart';
import { Products } from './Products';
import { useState } from 'react';

export const Home = () => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const updateCart = (item, quantity) => {
    setCart((prevCart) => {
      const exists = prevCart.find((i) => i.id === item.id);
      let updatedCart;

      if (exists) {
        updatedCart = prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity } : i,
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:p-8 py-4 px-6 md:w-full body-color">
        <Products className="flex-1" updateCart={updateCart} cart={cart} />
        <Cart
          className="bg-white md:w-1/4 md:h-1/3 p-6 rounded-lg"
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
    </>
  );
};
