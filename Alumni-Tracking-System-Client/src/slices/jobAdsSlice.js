import { createSlice } from "@reduxjs/toolkit";
import { fetchAllJobs } from "../actions/JobAdActions";

const initialState = {
  jobAds: [],
  isJobsLoading: false,
};

export const jobAdsSlice = createSlice({
  name: "jobAds",
  initialState,
  reducers: {
    setIsJobsLoadingTrue: (state) => {
      state.isJobsLoading = true;
    },
    setIsJobsLoadingFalse: (state) => {
      state.isJobsLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      state.jobAds = action.payload;
    });
  },
});

export const { setIsJobsLoadingTrue, setIsJobsLoadingFalse } = jobAdsSlice.actions;

export default jobAdsSlice.reducer;
