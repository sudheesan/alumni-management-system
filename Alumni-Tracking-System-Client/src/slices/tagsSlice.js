import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTags } from "../actions/tagsActions";

const initialState = {
  jobTags: [],
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    init: (state) => {
      state.jobTags.push("js");
      state.jobTags.push("java");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTags.fulfilled, (state, action) => {
      state.jobTags = action.payload;
    });
  },
});

export const { init } = tagsSlice.actions;

export default tagsSlice.reducer;
