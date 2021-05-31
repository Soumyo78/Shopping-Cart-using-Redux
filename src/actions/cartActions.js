// Actions Types
const DECREASE = "DECREASE";
const INCREASE = "INCREASE";
const REMOVE = "REMOVE";
const CLEAR_CART = "CLEAR_CART";
const GET_TOTALS = "GET_TOTALS";

// Action Creators
const decreaseAction = (id, amount) => {
  return { type: DECREASE, payload: { id: id, amount: amount } };
};

const increaseAction = (id) => {
  return { type: INCREASE, payload: { id: id } };
};

const removeAction = (id) => {
  return { type: REMOVE, payload: { id: id } };
};

const clearCartAction = () => {
  return { type: CLEAR_CART };
};

const getTotalAction = () => {
  return { type: GET_TOTALS };
};

export {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  decreaseAction,
  increaseAction,
  removeAction,
  clearCartAction,
  getTotalAction,
};
