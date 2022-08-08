import { createSlice } from "@reduxjs/toolkit";
import { fetchAllStudents, fetchStudentByid } from "../actions/studentActions";

const initialState = {
  students: [],
  selectedStudent: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    init: (state) => {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(fetchStudentByid.fulfilled, (state, action) => {
      state.selectedStudent = action.payload;
    });
  },
});

export const { init } = studentSlice.actions;

export default studentSlice.reducer;
