import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs } from "../services/jobService";
import { FETCH_ALL_JOBS } from "./actionTypes";
import to from "../utils/to";
import { setIsJobsLoadingFalse, setIsJobsLoadingTrue } from "../slices/jobAdsSlice";

const fetchAllJobs = createAsyncThunk(FETCH_ALL_JOBS, async (params, {dispatch}) => {

  dispatch(setIsJobsLoadingTrue())
  const [error, result] = await to(getAllJobs);
  dispatch(setIsJobsLoadingFalse())

  if(!error && result){
    return result;
  }
  return [];
});

export { fetchAllJobs };
