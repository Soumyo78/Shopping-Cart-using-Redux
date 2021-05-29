import "./style.css";
import { connect } from "react-redux";
import emptyCartPic from "../../resources/empty-cart.webp";
import ItemCardComponent from "../ItemCardComponent/index";
import FooterComponent from "../footerComponent/index";

const ItemCardContainerComponent = (props) => {
  const { cartItems = [] } = props;
  if (cartItems.length === 0) {
    return <img src={emptyCartPic} atl="Empty Cart" />;
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
