import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByEmail } from "../services/userManagementService";
import { FETCH_USER_BY_EMAIL } from "./actionTypes";
import to from "../utils/to";

const fetchUserByEmail = createAsyncThunk(FETCH_USER_BY_EMAIL, async () => {
  const [error, result] = await to(getUserByEmail);
  if(!error && result){
    return result;
  }
  return null;
});

export { fetchUserByEmail };
