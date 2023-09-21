
import React, { useContext } from 'react';
import CartContext from "../context/CartContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css"
import { getCartQuantity } from "../utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return (
    <div className="cart-widget"> {quantity > 0 ? quantity : ""}
      <button className="cart-button">
        <i className="bi bi-cart3"></i>
        <span className="badge"></span>
      </button>
    </div>
  );
};

export default CartWidget;
