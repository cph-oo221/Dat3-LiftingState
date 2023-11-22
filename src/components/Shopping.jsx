import { useState } from "react";
import Shoppinglist from "./Shoppinglist";
import ShoppingForm from "./ShoopingForm";

function Shopping() {
  const initialShoppingCart = [
    { name: "Apples", price: 2.99 },
    { name: "Oranges", price: 3.99 },
    { name: "Pears", price: 4.99 },
    { name: "Grapes", price: 5.99 },
  ];

  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);

  return (
    <div>
      <Shoppinglist shoppingCart={shoppingCart} />
      <ShoppingForm
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}

export default Shopping;
