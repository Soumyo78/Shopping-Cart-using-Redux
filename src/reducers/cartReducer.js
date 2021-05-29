import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
} from "../actionTypes/cartActionTypes";
import cartItems from "../cart-items";

const initialState = {
  cart: cartItems,
  total: 100,
  amount: 5,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case INCREASE:
      return {
        ...state,
      };

    case DECREASE:
      return {
        ...state,
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
export default cartReducer;
