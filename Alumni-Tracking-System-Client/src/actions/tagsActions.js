import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTags } from "../services/tagsService";
import { FETCH_ALL_TAGS } from "./actionTypes";
import to from "../utils/to";

const fetchAllTags = createAsyncThunk(FETCH_ALL_TAGS, async () => {
  const [error, result] = await to(getTags);
  if(!error && result){
    return result;
  }
  return [];
});

export { fetchAllTags };
