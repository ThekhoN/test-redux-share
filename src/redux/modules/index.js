import { combineReducers } from "redux";
import counter from "./counter/reducer";
import data from "./data/reducer";

export default combineReducers({
  counter,
  data
});
