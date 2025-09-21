const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <img width={100} src={cart.img} alt={cart.name} />
      <button onClick={() => handleRemoveCart(cart.id)}>X</button>
    </div>
  );
};

export default Cart;
