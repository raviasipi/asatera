import { createSlice } from "@reduxjs/toolkit";
import { TAuthInitialState } from "../../types/app.types";

const initialState: TAuthInitialState = {
  isAuthenticated: false,
  user: {},
  step: "login",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.payload;
      localStorage.setItem("isAuthenticated", state.isAuthenticated.toString());
      localStorage.setItem("loginResponse", JSON.stringify(action.payload));
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      localStorage.clear();
    },
    updateStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { loggedIn, loggedOut, updateStep } = authSlice.actions;
export default authSlice.reducer;
