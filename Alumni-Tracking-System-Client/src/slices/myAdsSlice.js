import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMyAds } from "../actions/myAdsActions";

const initialState = {
  myJobAds: [],
};

export const myAdsSlice = createSlice({
  name: "myJobAds",
  initialState,
  reducers: {
    init: (state) => {
     console.log("init");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMyAds.fulfilled, (state, action) => {
      state.jobAds = action.payload;
    });
  },
});

export const { init } = myAdsSlice.actions;

export default myAdsSlice.reducer;
