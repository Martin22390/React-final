import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import "../App.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>
          <Link to="/">Fonzi</Link>
        </h1>

        <ul className="nav-list">
          <li>
            <NavLink to="/category/Figuras Accion">Figuras Accion</NavLink>
          </li>
          <li>
            <NavLink to="/category/Figuras Recina">Figuras Recina</NavLink>
          </li>
          <li>
            <NavLink to="/category/Nenroids">Nenroids</NavLink>
          </li>
        </ul>
      </nav>

      <div className="cart-widget">
        <Link to="/checkout" className="checkout-button">
          <CartWidget />
          <span className="badge">{cart.length}</span>
          <span>Finalizar compra</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
