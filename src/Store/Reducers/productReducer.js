import * as actions from "../ActionTypes/Action-Types";
const initialState = {
  baskets: [],
  products: [],
  total: 0,
};

function reducer(state = initialState, { type, payload }) {
  if (type === actions.ADD_TO_CART) {
    let addItem = state.products.products.find(
      (item) => item.id === payload.id
    );
    let existItem = state.baskets.find((item) => item.id === payload.id);
    if (existItem) {
      addItem.quantity += 1;
      return {
        ...state,
        total: state.total + addItem.price,
      };
    } else {
      addItem.quantity = 1;
      let newTotal = state.total + addItem.price;
      return {
        ...state,
        baskets: [...state.baskets, addItem],
        total: newTotal,
      };
    }
  } else if (type === actions.ADD_PRODUCT) {
    return { ...state, products: payload };
  } else {
    return state;
  }
  // switch (type) {
  //   case actions.ADD_TO_CART:
  //     return { ...state, baskets: payload };
  //   case actions.ADD_PRODUCT:
  //     return { ...state, products: payload };
  //   default:
  //     return state;
  // }
}
export default reducer;
