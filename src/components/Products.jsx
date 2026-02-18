import { useState } from 'react';
import data from './data';
import { IncrementIcon } from './IncrementIcon';
import { DecrementIcon } from './DecrementIcon';

export const Products = ({ className, updateCart }) => {
  const [selected, setSelected] = useState({});
  const [quantity, setQuantity] = useState({});

  const increment = (id, item) => {
    setQuantity((prev) => {
      const newQty = (prev[id] || 0) + 1;
      updateCart(item, newQty);
      return { ...prev, [id]: newQty };
    });
  };

  const decrement = (id, item) => {
    setQuantity((prev) => {
      const newQty = Math.max((prev[id] ?? 0) - 1, 0);
      updateCart(item, newQty);
      return { ...prev, [id]: newQty };
    });
  };

  const toggleSelected = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={className}>
      <h1 className="red-hat-text text-[45px] mb-2">Desserts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg">
            <div className="relative w-full">
              <img
                src={item.img.mobile}
                className="block md:hidden w-full object-cover rounded-lg"
              />
              <img
                src={item.img.desktop}
                className="hidden md:block w-full object-cover rounded-lg"
              />

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-1 max-w-34 w-full">
                {!selected[item.id] ? (
                  <button
                    onClick={() => toggleSelected(item.id)}
                    className="cursor-pointer w-full bg-white border-color py-1 px-2 rounded-full"
                  >
                    <div className="flex gap-x-0.5 justify-center">
                      <img src="./images/icon-add-to-cart.svg" />
                      <span>Add to cart</span>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => toggleSelected(item.id)}
                    className="cursor-pointer w-full button py-1 px-2 rounded-full flex items-center justify-between "
                  >
                    <DecrementIcon
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent toggling
                        decrement(item.id, item);
                      }}
                      width={10}
                      height={10}
                      className="white-button-color h-4 w-4 rounded-full"
                    />
                    <span className="text-white font-semibold">
                      {quantity[item.id] || 0}
                    </span>
                    <IncrementIcon
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent toggling
                        increment(item.id, item);
                      }}
                      width={10}
                      height={10}
                      className="white-bg red-button-color h-4 w-4 rounded-full"
                    />
                  </button>
                )}
              </div>
            </div>

            <div className="px-2 py-6.5">
              <p>{item.category}</p>
              <h1>{item.name}</h1>
              <h2>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
