import { Cart } from './Cart';
import { Products } from './Products';
import { useState } from 'react';

export const Home = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, quantity) => {
    setCart((prevCart) => {
      const exists = prevCart.find((i) => i.id === item.id);
      if (exists) {
        return prevCart.map((i) => (i.id === item.id ? { ...i, quantity } : i));
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:p-8 py-4 px-6 md:w-full body-color">
        <Products className="flex-1 " updateCart={updateCart} cart={cart} />
        <Cart
          className="bg-white md:w-1/4 md:h-1/3 p-6 rounded-lg"
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </div>
    </>
  );
};
