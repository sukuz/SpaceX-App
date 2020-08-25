import { combineReducers } from "redux";
import historyReducer from "./historyReducer";
import payloadReducer from "./payloadReducer";

const rootReducer = combineReducers({
  history: historyReducer,
  payloadSpacex: payloadReducer,
});

export default rootReducer;
