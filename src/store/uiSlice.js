import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLogin: window.localStorage.getItem("userEmail") ? true : false,
    recallFetch: true,
    hasAccount: true,
    username: "",
    password: "",
  },
  reducers: {
    toggle(state) {
      state.hasAccount = !state.hasAccount;
    },
    toggleRefetchData(state) {
      console.log("Calling me");
      state.recallFetch = !state.recallFetch;
    },
    userStatus(state, action) {
      state.isLogin = action.payload.status;
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
