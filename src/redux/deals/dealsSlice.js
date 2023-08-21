import { createSlice } from "@reduxjs/toolkit";
import * as dealsOperations from "./dealsOperations";

const initialState = { data: [], isRefreshing: false };

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(dealsOperations.fetchDeals.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(dealsOperations.fetchDeals.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isRefreshing = false;
      })
      .addCase(dealsOperations.deleteDeal.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(dealsOperations.deleteDeal.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((id) => id._id !== payload);
        state.isRefreshing = false;
      })
      .addCase(dealsOperations.addDeal.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((id) => id._id !== payload);
      })
      .addDefaultCase((state) => {
        state.isRefreshing = false;
      }),
});

export default dealsSlice.reducer;
