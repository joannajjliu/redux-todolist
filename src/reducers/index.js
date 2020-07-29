import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

// HINT: Combine all of your reducers inside of this method.
const rootReducer = combineReducers({ visibilityFilter, todos });

export default rootReducer;
