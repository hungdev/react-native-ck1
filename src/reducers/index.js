import { combineReducers } from "redux";
import people from "./peopleReducer";
import cart from "./cartReducer";
import product from "./productReducer";

const rootReducer = combineReducers({
  people,
  cart,
  product
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
