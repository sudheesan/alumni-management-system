import { createSlice } from "@reduxjs/toolkit";
import { fetchAllJobs } from "../actions/JobAdActions";

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
  },
});

export const { init } = jobAdsSlice.actions;

export default jobAdsSlice.reducer;
