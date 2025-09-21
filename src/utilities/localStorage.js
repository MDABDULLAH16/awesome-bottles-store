const getItemsFromLocalStorage = () => {
  const getStoredString = localStorage.getItem("cart");
  if (getStoredString) {
    const getStored = JSON.parse(getStoredString);
    return getStored;
  }
  return [];
};

const saveIntoCart = (cart) => {
  const cartStringified = JSON.stringify(cart);

  localStorage.setItem("cart", cartStringified);
};

const setItemIntoLocalStorage = (id) => {
  const cart = getItemsFromLocalStorage();
  //   cart.push(id);

  if (cart.includes(id)) {
    alert("this cart already added");
  } else {
    const newCart = [...cart, id];
    saveIntoCart(newCart);
  }
};

const remomeFromLocalStorage = (id) => {
  const cart = getItemsFromLocalStorage();
  const updatedCart = cart.filter((item) => item !== id);
  saveIntoCart(updatedCart);
};

export {
  getItemsFromLocalStorage,
  setItemIntoLocalStorage as addToLocalStorage,
  remomeFromLocalStorage as removeFromLocalStorage,
};
