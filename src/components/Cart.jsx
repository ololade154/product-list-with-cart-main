// import { useState } from 'react';
// import { RemoveIcon } from './RemoveIcon';
// import Modal from 'react-modal';
//
// Modal.setAppElement('#root');
//
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '12px',
//     padding: '2rem',
//     width: '90%',
//     maxWidth: '500px',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// };
//
// export const Cart = ({ cart, className, removeFromCart }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );
//
//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//
//   return (
//     <div className={className}>
//       <h2 className="font-bold mb-3">Your Cart ({totalQuantity})</h2>
//
//       {cart.length === 0 ? (
//         <div className="flex flex-col items-center justify-center text-center">
//           <img src="./images/illustration-empty-cart.svg" alt="empty cart" />
//           <p>Your added items will appear here</p>
//         </div>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between mb-2 border-b-2 border-b-fuchsia-600"
//             >
//               <div className="flex flex-col">
//                 <span>{item.name}</span>
//                 <div className="flex gap-2 mb-2">
//                   <div>{item.quantity}x</div>
//                   <div>@{item.price}</div>
//                   <div>${(item.price * item.quantity).toFixed(2)}</div>
//                 </div>
//               </div>
//               <div>
//                 <RemoveIcon
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     removeFromCart(item.id);
//                   }}
//                   width={10}
//                   height={10}
//                   className="white-button-color h-4 w-4 rounded-full"
//                 />
//               </div>
//             </div>
//           ))}
//
//           <div className="flex items-center justify-between mb-4">
//             <div>Order Total</div>
//             <div>${totalPrice.toFixed(2)}</div>
//           </div>
//
//           <div className="flex items-center justify-center gap-x-2 px-2 py-2 button rounded-md mb-4">
//             <img src="./images/icon-carbon-neutral.svg" />
//             <p>This is a carbon-neutral delivery.</p>
//           </div>
//
//           <div className="flex justify-center">
//             <button
//               onClick={() => setModalIsOpen(true)}
//               className="white-bg rounded-full w-full max-w-50 py-2"
//             >
//               Confirm Order
//             </button>
//           </div>
//
//           <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={() => setModalIsOpen(false)}
//             style={customStyles}
//             contentLabel="Order Confirmation"
//           >
//             <h2 className="font-bold text-xl mb-4">Order Confirmed! 🎉</h2>
//             <p className="mb-4 text-gray-500">We hope you enjoy your food!</p>
//
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between mb-2 border-b pb-2"
//               >
//                 <span>
//                   {item.name} x{item.quantity}
//                 </span>
//                 <span>${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//
//             <div className="flex justify-between font-bold mt-4 mb-6">
//               <span>Total</span>
//               <span>${totalPrice.toFixed(2)}</span>
//             </div>
//
//             <button
//               onClick={() => setModalIsOpen(false)}
//               className="w-full py-2 rounded-full button text-white"
//             >
//               Start New Order
//             </button>
//           </Modal>
//         </>
//       )}
//     </div>
//   );
// };
import { useState } from 'react';
import { RemoveIcon } from './RemoveIcon';
import { OrderModal } from './OrderModal';

export const Cart = ({ cart, className, removeFromCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={className}>
      <h2 className="font-bold mb-3">Your Cart ({totalQuantity})</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img src="./images/illustration-empty-cart.svg" alt="empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-2 border-b-2 border-b-fuchsia-600"
            >
              <div className="flex flex-col">
                <span>{item.name}</span>
                <div className="flex gap-2 mb-2">
                  <div>{item.quantity}x</div>
                  <div>@{item.price}</div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
              <div>
                <RemoveIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.id);
                  }}
                  width={10}
                  height={10}
                  className="white-button-color h-4 w-4 rounded-full"
                />
              </div>
            </div>
          ))}

          {/* Order Total */}
          <div className="flex items-center justify-between mb-4">
            <div>Order Total</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-center gap-x-2 px-2 py-2 button rounded-md mb-4">
            <div>
              <img
                src="./images/icon-carbon-neutral.svg"
                alt="carbon neutral"
              />
            </div>
            <div>
              <p>This is a carbon-neutral delivery.</p>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setModalIsOpen(true)}
              className="white-bg rounded-full w-full max-w-50 py-2"
            >
              Confirm Order
            </button>
          </div>

          {/* Order Modal */}
          <OrderModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            cart={cart}
            totalPrice={totalPrice}
          />
        </>
      )}
    </div>
  );
};
