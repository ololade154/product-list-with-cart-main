// import Modal from 'react-modal';
//
// Modal.setAppElement('#root');
//
// const desktopStyles = {
//   content: {
//     top: '55%',
//     left: '60%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '12px',
//     padding: '2rem',
//     width: '100%',
//     maxWidth: '450px',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1000,
//   },
// };
//
// const mobileStyles = {
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
//     zIndex: 1000,
//   },
// };
//
// export const OrderModal = ({ isOpen, onClose, cart, totalPrice }) => {
//   const isMobile = window.innerWidth < 768;
//
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={isMobile ? mobileStyles : desktopStyles}
//       contentLabel="Order Confirmation"
//     >
//       <h2 className="font-bold text-xl mb-4">Order Confirmed! 🎉</h2>
//       <p className="mb-4 text-gray-500">We hope you enjoy your food!</p>
//
//       {cart.map((item) => (
//         <div key={item.id} className="flex justify-between mb-2 border-b pb-2">
//           <span>
//             {item.name} x{item.quantity}
//           </span>
//           <span>${(item.price * item.quantity).toFixed(2)}</span>
//         </div>
//       ))}
//
//       <div className="flex justify-between font-bold mt-4 mb-6">
//         <span>Total</span>
//         <span>${totalPrice.toFixed(2)}</span>
//       </div>
//
//       <button
//         onClick={onClose}
//         className="w-full py-2 rounded-full button text-white"
//       >
//         Start New Order
//       </button>
//     </Modal>
//   );
// };
import Modal from 'react-modal';

Modal.setAppElement('#root');

const desktopStyles = {
  content: {
    top: '55%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    maxWidth: '450px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

const mobileStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    padding: '2rem',
    width: '90%',
    maxWidth: '500px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

export const OrderModal = ({ isOpen, onClose, cart, totalPrice }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={isMobile ? mobileStyles : desktopStyles}
      contentLabel="Order Confirmation"
    >
      <h2 className="font-bold text-xl mb-4">Order Confirmed! 🎉</h2>
      <p className="mb-4 text-gray-500">We hope you enjoy your food!</p>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2 border-b pb-2">
          <div className="flex items-center gap-3">
            <img
              src={item.img.thumbnail}
              alt={item.name}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{item.name}</span>
              <div className="flex gap-x-6">
                <div>{item.quantity}x</div>
                <div> @ ${item.price}</div>
              </div>
            </div>
          </div>
          <span className="font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}

      <div className="flex justify-between font-bold mt-4 mb-6">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button
        onClick={onClose}
        className="w-full py-2 rounded-full button text-white"
      >
        Start New Order
      </button>
    </Modal>
  );
};
