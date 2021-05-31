import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from "../actions/cartActions";
import cartItems from "../cart-items";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
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
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          }
          return cartItem;
        }),
      };

    case DECREASE:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        }),
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total,
        amount,
      };

    default:
      return state;
  }
};
export default cartReducer;
