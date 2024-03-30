import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux-toolkit/reducers/Auth";
import { DEBUG_MODE } from "@/utils/Constants";

const reducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: DEBUG_MODE,
});
