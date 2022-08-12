import { createSlice } from "@reduxjs/toolkit";
import { fetchAllStudents, fetchStudentByid } from "../actions/studentActions";

const initialState = {
  students: [],
  selectedStudent: null,
  isStudentsLoading: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setIsStudentsLoadingTrue: (state) => {
      state.isStudentsLoading = true;
    },
    setIsStudentsLoadingFalse: (state) => {
      state.isStudentsLoading = false;
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

export const { setIsStudentsLoadingTrue, setIsStudentsLoadingFalse } = studentSlice.actions;

export default studentSlice.reducer;
