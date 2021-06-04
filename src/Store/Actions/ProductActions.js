import * as actions from "../ActionTypes/Action-Types";

export const productAdd = (id) => ({
  type: actions.ADD_TO_CART,
  payload: { id },
});

export const productInsert = (products) => ({
  type: actions.ADD_PRODUCT,
  payload: { products },
});
