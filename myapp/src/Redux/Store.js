import {createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ShopApp from "./Reducer";

const middleware=[thunk]
const store = createStore(
    ShopApp,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
