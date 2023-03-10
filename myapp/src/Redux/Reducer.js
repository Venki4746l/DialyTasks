import {combineReducers} from "redux"
const intialState = {
  shopcardItems: [],
};

 function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "add":
      let card = {
        id: payload.id,
        quantity: 1,
        name: payload.name,
      };
      return state.shopcardItems.push(card);
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;

    default:
      return payload;
  }
}

const ShopApp = combineReducers({
    _todoProduct:reducer
});
export default ShopApp;