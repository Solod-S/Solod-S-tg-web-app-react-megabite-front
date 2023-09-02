import { createSlice } from "@reduxjs/toolkit";

const initialState = { catalogBackLinkHref: "" };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setBackLinkHref: (_, { payload }) => ({
      catalogBackLinkHref: payload,
    }),
  },
});

export const { setBackLinkHref } = appSlice.actions;

export default appSlice.reducer;
