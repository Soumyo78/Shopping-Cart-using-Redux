import "./App.css";
import Navbar from "./components/navbarComponent";
import ItemCardContainerComponent from "./components/itemCardContainerComponent/index";
import storeCreator from "./store";
import { Provider } from "react-redux";

const store = storeCreator();

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Navbar />
        <p className="cart-title-text">YOUR CART</p>
        <ItemCardContainerComponent />
      </div>
    </Provider>
  );
}

export default App;
