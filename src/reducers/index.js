import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  streams: streamReducer
});
