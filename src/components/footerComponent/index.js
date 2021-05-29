import { Fragment } from "react";
import "./style.css";
import { connect } from "react-redux";
import { CLEAR_CART } from "../../actionTypes/cartActionTypes";

const FooterComponent = (props) => {
  const { totalPrice, dispatch } = props;
  return (
    <Fragment>
      <hr />
      <div className="total-price-container">
        <h2>Total Price: </h2>
        <h2>₹{totalPrice}.00</h2>
      </div>
      <button
        className="clear-all-btn"
        onClick={() => dispatch({ type: CLEAR_CART })}
      >
        Clear All
      </button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.total,
  };
};

export default connect(mapStateToProps)(FooterComponent);
