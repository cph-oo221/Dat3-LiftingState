function Shoppinglist({ shoppingCart }) {
  return (
    <div>
      <h1>Shoppinglist</h1>

      <ul>
        {shoppingCart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoppinglist;
