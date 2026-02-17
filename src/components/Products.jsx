import { useState } from 'react';
import data from './data';
export const Products = ({ className }) => {
  const [selected, setSelected] = useState({});

  const toggleSelected = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className={className}>
      <h1>Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg ">
            <div className="relative w-full">
              <img
                src={item.img.mobile}
                className="block md:hidden w-full object-cover rounded-lg "
              />
              <img
                src={item.img.desktop}
                className="hidden md:block w-full object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 ">
                {!selected[item.id] ? (
                  <button
                    onClick={() => toggleSelected(item.id)}
                    className="cursor-pointer w-full bg-white border-color py-1.5 px-8 rounded-full "
                  >
                    <div className="flex gap-8">
                      <div>P</div>
                      <div>J</div>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => toggleSelected(item.id)}
                    className="cursor-pointer w-full button py-1.5 px-8 rounded-full"
                  >
                    Hello
                  </button>
                )}
              </div>
            </div>
            <div className="p-2">
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
