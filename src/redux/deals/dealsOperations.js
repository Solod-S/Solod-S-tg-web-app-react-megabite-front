import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/API/DealsApi.js";

export const fetchDeals = createAsyncThunk("deals/", async (_, thunkAPI) => {
  // const state = thunkAPI.getState();
  // const persisterToken = state.auth.token;
  // console.log(`persisterToken`, persisterToken);
  // if (persisterToken === null) {
  //   return thunkAPI.rejectWithValue();
  // }
  try {
    const data = await api.fetchDeals();

    // const data2 = await api2.fetchForms();
    // console.log(data2);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteDeal = createAsyncThunk(
  "deletedeal/id",
  async (id, thunkAPI) => {
    try {
      await api.deleteDeal(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDeal = createAsyncThunk("adddeal/id", async (id, thunkAPI) => {
  try {
    await api.addDeal(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
