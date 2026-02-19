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
      <h2 className="font-bold mb-3 red-text red-hat-text md:text-[18px] text-[16px]">
        Your Cart ({totalQuantity})
      </h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img src="./images/illustration-empty-cart.svg" alt="empty cart" />
          <p className="red-hat-text rose-color-400 font-semibold mt-3">
            Your added items will appear here
          </p>
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
          <div className="flex items-center justify-between mb-6">
            <div>Order Total</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-center gap-x-2 px-2 py-2 rose-bgcolor-50 rounded-md mb-4">
            <div>
              <img
                src="./images/icon-carbon-neutral.svg"
                alt="carbon neutral"
              />
            </div>
            <div>
              <p className="rose-color-900 text-[13px]">
                This is a carbon-neutral delivery.
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center white-text red-hat-text text-[16px] md:text-[14px] ">
            <button
              onClick={() => setModalIsOpen(true)}
              className="button rounded-full w-full py-2"
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
