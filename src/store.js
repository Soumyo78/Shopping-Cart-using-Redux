import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";

// Store Creator Function
const storeCreator = () => {
  return createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default storeCreator;
