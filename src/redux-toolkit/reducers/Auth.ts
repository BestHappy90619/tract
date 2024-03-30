import { createSlice } from "@reduxjs/toolkit";

import { isEmpty } from "@/utils/Functions";

const currentUser = JSON.parse(
  localStorage.getItem("currentUser") || '{"name":"Ryan Ogilvie"}'
);
const initialState = isEmpty(currentUser)
  ? { isLoggedIn: false, currentUser: null }
  : { isLoggedIn: true, currentUser };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

const { reducer } = authSlice;
export default reducer;
