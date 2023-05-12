import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface countState {
  count: number;
}

const initialState: countState = {
  count: 0
}

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
    resetCount: (state) => {
      state.count = 0;
    }
  },
  /* extraReducers(builder) {
  }, */
});

export const {increaseCount, decreaseCount, resetCount} = countSlice.actions;
export const countSelector = (store: RootState) => store.count;
export default countSlice.reducer;