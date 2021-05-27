import "./style.css";
import ItemCardComponent from "../ItemCardComponent/index";
import FooterComponent from "../footerComponent/index";

const ItemCardContainerComponent = (props) => {
  const { cartItems = [] } = props;
  if (cartItems.length === 0) {
    return <img src="https://i1.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1" alt="Empty Cart Image" />;
  }
  return (
    <div className="item-card-main-container">
      {cartItems.map((item, index) => {
        return <ItemCardComponent key={item.id} {...item} />;
      })}
      <FooterComponent/>
    </div>
  );
};

export default ItemCardContainerComponent;
