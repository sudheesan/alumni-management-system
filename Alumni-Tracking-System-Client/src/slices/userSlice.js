import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail } from "../actions/userActions";

const initialState = {
  currentUser: null,
  isUserLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsUserLoadingTrue: (state) => {
      state.isUserLoading = true;
    },
    setIsUserLoadingFalse: (state) => {
      state.isUserLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { setIsUserLoadingTrue, setIsUserLoadingFalse  } = userSlice.actions;

export default userSlice.reducer;
