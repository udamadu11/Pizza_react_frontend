import * as actions from "../ActionTypes/Action-Types";
const initialState = {
  baskets: [],
};
let lastId = 0;

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_TO_CART:
      return { ...state, baskets: payload };
    default:
      return state;
  }
}
export default reducer;
