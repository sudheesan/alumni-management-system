import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs } from "../services/jobService";
import { FETCH_ALL_JOBS } from "./actionTypes";
import to from "../utils/to";

const fetchAllJobs = createAsyncThunk(FETCH_ALL_JOBS, async () => {
  const [error, result] = await to(getAllJobs);
  if(!error && result){
    return result;
  }
  return [];
});

export { fetchAllJobs };
