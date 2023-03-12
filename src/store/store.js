import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import authReducer from "./authSlice";
import { login } from "./authSlice";

const AUTH_KEY = "auth";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const authData = localStorage.getItem(AUTH_KEY);
if (authData) {
  const authState = JSON.parse(authData);
  store.dispatch(login(authState));
}

window.addEventListener("storage", (event) => {
  if (event.key === AUTH_KEY) {
    const authState = JSON.parse(event.newValue);
    store.dispatch(login(authState));
  }
});

export default store;
