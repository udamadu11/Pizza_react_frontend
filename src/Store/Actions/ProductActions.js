import * as actions from "../ActionTypes/Action-Types";

export const productAdd = (name, desc, price, image, id) => ({
  type: actions.ADD_TO_CART,
  payload: {
    name,
    desc,
    price,
    image,
    id,
  },
});
