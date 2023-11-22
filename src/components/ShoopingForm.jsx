import { useRef } from "react";

function ShoppingForm({ setShoppingCart, shoppingCart }) {
  const itemRef = useRef(null);
  const priceRef = useRef(null);

  return (
    <div>
      <input type="text" placeholder="Item name" ref={itemRef} />
      <input type="number" min={0} placeholder="Price" ref={priceRef} />
      <button
        onClick={() => {
          setShoppingCart([
            ...shoppingCart,
            {
              name: itemRef.current.value,
              price: priceRef.current.value,
            },
          ]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ShoppingForm;
