import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyAds } from "../services/myAds";
import { FETCH_ALL_MY_ADS } from "./actionTypes";
import to from "../utils/to";

const fetchAllMyAds = createAsyncThunk(FETCH_ALL_MY_ADS, async () => {
  const [error, result] = await to(getMyAds);
  if(!error && result){
    return result;
  }
  return [];
});

export { fetchAllMyAds };
