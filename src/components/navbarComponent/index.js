import "./style.css";
import cartPic from "./../../resources/cart.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1 id="navbar-title-text">The Mobile Shop</h1>
      <div className="cart-amount-container">
        <img id="cart-pic" src={cartPic} alt="cart-icon" />
        <div className="amount-container">
          <p className="total-amount">0</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
