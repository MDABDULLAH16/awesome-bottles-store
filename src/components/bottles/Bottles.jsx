import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h1>Bottles: {bottles.length}</h1>
      <h2>Cart: {cart.length}</h2>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
