import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyAds, postNewAdd} from "../services/myAds";
import { FETCH_ALL_MY_ADS, POST_A_JOB_AD } from "./actionTypes";
import to from "../utils/to";
import { getUsername } from "../services/userService";

const fetchAllMyAds = createAsyncThunk(FETCH_ALL_MY_ADS, async () => {
  const [error, result] = await to(getMyAds);
  if (!error && result) {
    return result;
  }
  return [];
});

const postNewJobAd = createAsyncThunk(POST_A_JOB_AD, async (params) => {
  const { description, tags, companyText, companyCity, companyState  } = params;
  const body = {
    description,
    tags,
    companyName: companyText,
    state: companyState,
    city: companyCity,
    postTedBy: getUsername(),
  }
  console.log(params);
  const [error, result] = await to(postNewAdd, body);
  if (!error && result) {
    return result;
  }
  return [];
});

export { fetchAllMyAds, postNewJobAd };
