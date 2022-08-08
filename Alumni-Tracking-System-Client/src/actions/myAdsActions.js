import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyAds, postNewAdd, updateAnAd } from "../services/myAdsService";
import {
  FETCH_ALL_MY_ADS,
  POST_A_JOB_AD,
  UPDATE_A_JOB_AD,
} from "./actionTypes";
import to from "../utils/to";
import { getEmail } from "../services/userService";

const fetchAllMyAds = createAsyncThunk(FETCH_ALL_MY_ADS, async () => {
  const [error, result] = await to(getMyAds);
  if (!error && result) {
    return result;
  }
  return [];
});

const postNewJobAd = createAsyncThunk(POST_A_JOB_AD, async (params) => {
  const [error, result] = await to(postNewAdd, params);
  if (!error && result) {
    return result;
  }
  return null;
});

const updateAJobAd = createAsyncThunk(UPDATE_A_JOB_AD, async (params) => {
  const [error, result] = await to(updateAnAd, params);
  if (!error && result) {
    return result;
  }
  return null;
});

export { fetchAllMyAds, postNewJobAd, updateAJobAd };
