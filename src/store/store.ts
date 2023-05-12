import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// register slice
import countReducer from "./slice/countSlice";

export const store = configureStore({
  reducer: {
    count: countReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();