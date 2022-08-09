import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail } from "../actions/userActions";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    init: (state) => {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { init } = userSlice.actions;

export default userSlice.reducer;
