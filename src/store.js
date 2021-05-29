import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";

// Store Creator Function
const storeCreator = () => {
  return createStore(cartReducer);
};

export default storeCreator;
