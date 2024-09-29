import { legacy_createStore, combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  login: loginReducer
});

const initialState = {
  login: {
    forgotPassword: "rajesh" // Ensure this matches your reducer's initial state
  }
};

export const store = legacy_createStore(rootReducer, initialState);
