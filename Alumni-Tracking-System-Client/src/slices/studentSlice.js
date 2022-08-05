import { createSlice } from "@reduxjs/toolkit";
import { fetchAllStudents } from "../components/modules/actions/studentActions";

const initialState = {
  students: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    init: (state) => {
      state.students.push("TOH HARDY");
      state.students.push("TOH HANKS");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
  },
});

export const { init } = studentSlice.actions;

export default studentSlice.reducer;
