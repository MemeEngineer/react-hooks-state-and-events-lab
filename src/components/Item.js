import React, {useState} from "react";

function Item({ name, category }) {

  function click(){ 
    cart ? setCart(false) : setCart(true);
  }
  const [cart, setCart] = useState(false);
  return (
    <li className={cart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={click} className="add">{cart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
