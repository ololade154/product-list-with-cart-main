import { Cart } from './Cart';
import { Products } from './Products';
import { useState } from 'react';

export const Home = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity } : p));
      }

      return [...prev, { ...item, quantity }];
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:p-8 py-4 px-6 md:w-full">
        <Products
          className="flex-1 md:border-2 md:border-b-emerald-700 "
          updateCart={updateCart}
        />
        <Cart
          className="bg-blue-700 border-2 border-red-500 md:w-1/4 md:h-50 "
          cart={cart}
        />
      </div>
    </>
  );
};
