import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs, getJobDetailsByJobId } from "../services/jobService";
import {FETCH_ALL_JOBS, FETCH_JOB_DETAILS} from "./actionTypes";
import to from "../utils/to";

const fetchAllJobs = createAsyncThunk(FETCH_ALL_JOBS, async () => {
  const [error, result] = await to(getAllJobs);
  if(!error && result){
    return result;
  }
  return [];
});

const fetchJobDetails = (id) => createAsyncThunk(FETCH_JOB_DETAILS, async (id) => {
  console.log(id, "}}}}}}")
  const [error, result] = await to(()=> getJobDetailsByJobId(id));
  if(!error && result){
    return result;
  }
  return [];
});


export { fetchAllJobs,  fetchJobDetails};
