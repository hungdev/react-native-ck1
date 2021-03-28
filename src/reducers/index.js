import { combineReducers } from "redux";
import people from "./peopleReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  people,
  cart
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
