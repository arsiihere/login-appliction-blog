import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLogin: false,
    hasAccount: true,
    username: "",
    password: "",
  },
  reducers: {
    toggle(state) {
      state.hasAccount = !state.hasAccount;
    },
    setUserName(state, action) {
      state.username = action.payload.username;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
