import "./style.css";
import cartPic from "./../../resources/cart.png";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { totalAmount } = props;
  return (
    <nav className="navbar-container">
      <h1 id="navbar-title-text">The Mobile Shop</h1>
      <div className="cart-amount-container">
        <img id="cart-pic" src={cartPic} alt="cart-icon" />
        <div className="amount-container">
          <p className="total-amount">{totalAmount}</p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    totalAmount: state.amount,
  };
};

export default connect(mapStateToProps)(Navbar);
