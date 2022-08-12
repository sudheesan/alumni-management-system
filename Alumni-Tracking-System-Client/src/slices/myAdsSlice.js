import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMyAds } from "../actions/myAdsActions";

const initialState = {
  myJobAds: [],
  isMyAdsLoading: false,
};

export const myAdsSlice = createSlice({
  name: "myJobAds",
  initialState,
  reducers: {
    setIsMyAdsLoadingTrue: (state) => {
      state.isMyAdsLoading = true;
    },
    setIsMyAdsLoadingFalse: (state) => {
      state.isMyAdsLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMyAds.fulfilled, (state, action) => {
      state.myJobAds = action.payload;
    });
  },
});

export const { setIsMyAdsLoadingTrue, setIsMyAdsLoadingFalse } = myAdsSlice.actions;

export default myAdsSlice.reducer;
