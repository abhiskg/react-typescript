const addToDb = (id: string) => {
  let shoppingCart;

  const storedItems = localStorage.getItem("shopping-cart");

  if (storedItems) {
    shoppingCart = JSON.parse(storedItems);
  } else {
    shoppingCart = {};
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQty = quantity + 1;
    shoppingCart[id] = newQty;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id: string) => {
  const storedItems = localStorage.getItem("shopping-cart");

  if (!storedItems) {
    return;
  }

  let shoppingCart = JSON.parse(storedItems);

  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export { addToDb, removeFromDb };
