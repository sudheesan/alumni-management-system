import { createSlice } from "@reduxjs/toolkit";
import {fetchAllJobs, fetchJobDetails} from "../actions/JobAdActions";

const initialState = {
  jobAds: [],
};

export const jobAdsSlice = createSlice({
  name: "jobAds",
  initialState,
  reducers: {
    init: (state) => {
     console.log("init");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      console.log("setting state")
      state.jobAds = action.payload;
    });
    builder.addCase(fetchJobDetails().fulfilled, (state, action) => {
      console.log("setting state")
      state.jobDetails = action.payload;
    });
  },
});

export const { init } = jobAdsSlice.actions;

export default jobAdsSlice.reducer;
