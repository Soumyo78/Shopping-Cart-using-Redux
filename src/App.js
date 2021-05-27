import "./App.css";
import Navbar from "./components/navbarComponent";
import ItemCardContainerComponent from "./components/itemCardContainerComponent/index";
import cartItems from "./cart-items";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <p className="cart-title-text">YOUR CART</p>
      <ItemCardContainerComponent cartItems={cartItems} />
    </div>
  );
}

export default App;
