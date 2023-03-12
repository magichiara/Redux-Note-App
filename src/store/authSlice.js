import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const AUTH_KEY = "auth";
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.notes = action.payload.notes;
      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = "";
      state.notes = [];
      localStorage.removeItem(AUTH_KEY);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
