import { createSlice } from "@reduxjs/toolkit";
import { fetchAllStudents, fetchStudentByid } from "../actions/studentActions";

const initialState = {
  students: [],
  selectedStudent: null,
  isStudentsLoading: false,
  isStudentDetailLoading: false,
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
    setIsStudentDetailsLoadingTrue: (state) => {
      state.isStudentDetailLoading = true;
    },
    setIsStudentDetailsLoadingFalse: (state) => {
      state.isStudentDetailLoading = false;
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

export const {
  setIsStudentsLoadingTrue,
  setIsStudentsLoadingFalse,
  setIsStudentDetailsLoadingTrue,
  setIsStudentDetailsLoadingFalse,
} = studentSlice.actions;

export default studentSlice.reducer;
