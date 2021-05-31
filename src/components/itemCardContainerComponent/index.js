import "./style.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import emptyCartPic from "../../resources/empty-cart.webp";
import ItemCardComponent from "../ItemCardComponent/index";
import FooterComponent from "../footerComponent/index";
import { getTotalAction } from "../../actions/cartActions";

const ItemCardContainerComponent = (props) => {
  const { cartItems = [], dispatch } = props;

  useEffect(() => {
    dispatch(getTotalAction());
  });

  if (cartItems.length === 0) {
    return <img src={emptyCartPic} alt="empty-cart-pic" />;
  }
  return (
    <div className="item-card-main-container">
      {cartItems.map((item) => {
        return <ItemCardComponent key={item.id} {...item} />;
      })}
      <FooterComponent />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

export default connect(mapStateToProps)(ItemCardContainerComponent);
