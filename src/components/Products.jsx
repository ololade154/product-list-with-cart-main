// import { useState } from 'react';
// import data from './data';
// import { IncrementIcon } from './IncrementIcon';
// import { DecrementIcon } from './DecrementIcon';
//
// export const Products = ({ className, updateCart, cart }) => {
//   const [selected, setSelected] = useState({});
//
//   const getQuantity = (id) => {
//     const item = cart.find((i) => i.id === id);
//     return item ? item.quantity : 0;
//   };
//
//   const increment = (item) => {
//     // Ensure controls show when first incrementing
//     if (!selected[item.id]) {
//       setSelected((prev) => ({ ...prev, [item.id]: true }));
//     }
//     updateCart(item, getQuantity(item.id) + 1);
//   };
//
//   const decrement = (item) => {
//     const current = getQuantity(item.id);
//     if (current > 0) {
//       updateCart(item, current - 1);
//       if (current - 1 === 0) {
//         setSelected((prev) => ({ ...prev, [item.id]: false }));
//       }
//     }
//   };
//
//   const toggleSelected = (id) => {
//     setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
//     updateCart(item, 1);
//   };
//
//   return (
//     <div className={className}>
//       <h1 className="red-hat-text text-[45px] mb-2">Desserts</h1>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
//         {data.map((item) => (
//           <div key={item.id} className="bg-white shadow-md rounded-lg">
//             <div className="relative w-full">
//               <img
//                 src={item.img.mobile}
//                 className="block md:hidden w-full object-cover rounded-lg"
//                 alt={item.name}
//               />
//               <img
//                 src={item.img.desktop}
//                 className="hidden md:block w-full object-cover rounded-lg"
//                 alt={item.name}
//               />
//
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-1 max-w-34 w-full">
//                 {!selected[item.id] ? (
//                   <button
//                     onClick={() => toggleSelected(item.id, item)}
//                     className="cursor-pointer w-full bg-white border-color py-1 px-2 rounded-full"
//                   >
//                     <div className="flex gap-x-0.5 justify-center">
//                       <img src="./images/icon-add-to-cart.svg" alt="Add" />
//                       <span>Add to cart</span>
//                     </div>
//                   </button>
//                 ) : (
//                   <div className="cursor-pointer w-full button py-1 px-2 rounded-full flex items-center justify-between">
//                     <DecrementIcon
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         decrement(item);
//                       }}
//                       width={10}
//                       height={10}
//                       className="white-button-color h-4 w-4 rounded-full"
//                     />
//                     <span className="text-white font-semibold">
//                       {getQuantity(item.id)}
//                     </span>
//                     <IncrementIcon
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         increment(item);
//                       }}
//                       width={10}
//                       height={10}
//                       className="white-bg red-button-color h-4 w-4 rounded-full"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//
//             <div className="px-2 py-6.5">
//               <p>{item.category}</p>
//               <h1>{item.name}</h1>
//               <h2>${item.price}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import data from './data';
import { IncrementIcon } from './IncrementIcon';
import { DecrementIcon } from './DecrementIcon';

export const Products = ({ className, updateCart, cart }) => {
  const [selected, setSelected] = useState({});

  const getQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const increment = (item) => {
    if (!selected[item.id]) {
      setSelected((prev) => ({ ...prev, [item.id]: true }));
    }
    updateCart(item, getQuantity(item.id) + 1);
  };

  const decrement = (item) => {
    const current = getQuantity(item.id);
    if (current > 0) {
      updateCart(item, current - 1);
      if (current - 1 === 0) {
        setSelected((prev) => ({ ...prev, [item.id]: false }));
      }
    }
  };

  const toggleSelected = (item) => {
    setSelected((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
    updateCart(item, 1);
    toast.success(`${item.name} added to cart!`); // toast fires here
  };

  return (
    <div className={className}>
      <Toaster position="top-center " />

      <h1 className="red-hat-text text-[45px] mb-2">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg">
            <div className="relative w-full">
              <img
                src={item.img.mobile}
                className="block md:hidden w-full object-cover rounded-lg"
                alt={item.name}
              />
              <img
                src={item.img.desktop}
                className="hidden md:block w-full object-cover rounded-lg"
                alt={item.name}
              />

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-1 max-w-34 w-full">
                {!selected[item.id] ? (
                  <button
                    onClick={() => toggleSelected(item)}
                    className="cursor-pointer w-full bg-white border-color py-1 px-2 rounded-full"
                  >
                    <div className="flex gap-x-0.5 justify-center">
                      <img src="./images/icon-add-to-cart.svg" alt="Add" />
                      <span>Add to cart</span>
                    </div>
                  </button>
                ) : (
                  <div className="cursor-pointer w-full button py-1 px-2 rounded-full flex items-center justify-between">
                    <DecrementIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        decrement(item);
                      }}
                      width={10}
                      height={10}
                      className="white-button-color h-4 w-4 rounded-full"
                    />
                    <span className="text-white font-semibold">
                      {getQuantity(item.id)}
                    </span>
                    <IncrementIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        increment(item);
                      }}
                      width={10}
                      height={10}
                      className="white-bg red-button-color h-4 w-4 rounded-full"
                    />
                  </div>
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
