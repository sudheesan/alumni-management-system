import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByEmail } from "../services/userManagementService";
import { FETCH_USER_BY_EMAIL } from "./actionTypes";
import to from "../utils/to";
import { setIsUserLoadingFalse, setIsUserLoadingTrue } from "../slices/userSlice";

const fetchUserByEmail = createAsyncThunk(FETCH_USER_BY_EMAIL, async (params, {dispatch}) => {

  dispatch(setIsUserLoadingTrue())
  const [error, result] = await to(getUserByEmail);
  dispatch(setIsUserLoadingFalse())

  if(!error && result){
    return result;
  }
  return null;
});

export { fetchUserByEmail };
