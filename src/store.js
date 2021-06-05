import { applyMiddleware, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import logger from "redux-logger";

// Store Creator Function
const storeCreator = () => {
  return createStore(
    cartReducer,
    applyMiddleware(logger)
  );
};

export default storeCreator;
