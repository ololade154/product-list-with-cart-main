import Modal from 'react-modal';

Modal.setAppElement('#root');

const desktopStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    maxWidth: '450px',
    height: '500px',
    overflowY: 'auto',
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
    padding: '1.5rem',
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
      <img src="./images/icon-order-confirmed.svg" className="h-10 w-10 mb-4" />
      <h2 className=" red-hat-text font-bold text-[25px] md:text-[30px] mb-3">
        Order Confirmed
      </h2>
      <p className="mb-6 rose-color-500 font-semibold text-[16px] md:text-[18px]">
        We hope you enjoy your food!
      </p>
      <div className="rose-bgcolor-50 rounded-md md:px-6 md:py-6 p-4 mb-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-2 border-b rose-border pb-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.img.thumbnail}
                alt={item.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="red-hat-text font-bold md:text-[14px] text-[16px]">
                  {item.name}
                </span>
                <div className="flex gap-x-4">
                  <div className="red-text red-hat-text font-bold md:text-[12px] text-[14px]">
                    {item.quantity}x
                  </div>
                  <div className="rose-color-400 red-hat-text font-semibold md:text-[13px] text-[14px]">
                    @ ${item.price}
                  </div>
                </div>
              </div>
            </div>
            <span className="font-semibold rose-color-900 red-hat-text md:text-[17px] text-[13px]">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="flex justify-between mt-4 mb-6">
          <span className="rose-color-900 red-hat-text md:text-[13px] text-[14px]">
            Order Total
          </span>
          <span className="rose-color-900 red-hat-text font-bold md:text-[19px] text-[14px]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
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
