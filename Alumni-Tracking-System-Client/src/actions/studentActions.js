import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStudents, getStudentByid } from "../services/studentService";
import { FETCH_ALL_STUDENTS, FETCH_STUDENT_BY_ID } from "./actionTypes";
import to from "../utils/to";
import { setIsStudentDetailsLoadingFalse, setIsStudentDetailsLoadingTrue, setIsStudentsLoadingFalse, setIsStudentsLoadingTrue } from "../slices/studentSlice";

const fetchAllStudents = createAsyncThunk(FETCH_ALL_STUDENTS, async (params, {dispatch}) => {

  dispatch(setIsStudentsLoadingTrue());
  const [error, result] = await to(getStudents);
  dispatch(setIsStudentsLoadingFalse());
  
  if(!error && result){
    return result;
  }
  return [];
});

const fetchStudentByid = createAsyncThunk(FETCH_STUDENT_BY_ID, async (id, {dispatch}) => {
  dispatch(setIsStudentDetailsLoadingTrue())
  const [error, result] = await to(getStudentByid, id);
  dispatch(setIsStudentDetailsLoadingFalse());
  if(!error && result){
    return result;
  }
  return [];
});
export { fetchAllStudents, fetchStudentByid };
