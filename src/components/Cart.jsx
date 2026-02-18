export const Cart = ({ cart, className }) => {
  return (
    <div className={className}>
      <h2 className="font-bold mb-3">Your Cart</h2>

      {cart.length === 0 && (
        <div>
          <img src="./images/illustration-empty-cart.svg" />
          <p>your added item will appear here</p>
        </div>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <span>x {item.quantity}</span>
        </div>
      ))}
    </div>
  );
};
