import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLocalStorage,
  getItemsFromLocalStorage,
} from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeIds = getItemsFromLocalStorage();

    const storedCart = [];
    for (const id of storeIds) {
      const cartBottles = bottles.find((bottle) => bottle.id === id);
      if (cartBottles) {
        storedCart.push(cartBottles);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const exitId = cart.find((item) => item.id === bottle.id);
    if (!exitId) {
      const newCart = [...cart, bottle];
      setCart(newCart);

      addToLocalStorage(bottle.id);
    } else {
      alert("this product already added");
    }
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
