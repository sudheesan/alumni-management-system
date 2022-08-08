import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMyAds } from "../actions/myAdsActions";

const initialState = {
  myJobAds: [],
  showLoader: false,
  showAlert: false,
};

export const myAdsSlice = createSlice({
  name: "myJobAds",
  initialState,
  reducers: {
    setLoaderStatus: (state, action) => {
      state.showLoader = action.payload;
    },
    setAlertStatus: (state, action) => {
      console.log("calling", action.payload);
      state.showAlert = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMyAds.fulfilled, (state, action) => {
      state.myJobAds = action.payload;
    });
  },
});

export const { setLoaderStatus, setAlertStatus } = myAdsSlice.actions;

export default myAdsSlice.reducer;
