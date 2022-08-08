import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStudents, getStudentByid } from "../services/studentService";
import { FETCH_ALL_STUDENTS, FETCH_STUDENT_BY_ID } from "./actionTypes";
import to from "../utils/to";

const fetchAllStudents = createAsyncThunk(FETCH_ALL_STUDENTS, async () => {
  const [error, result] = await to(getStudents);
  if(!error && result){
    return result;
  }
  return [];
});

const fetchStudentByid = createAsyncThunk(FETCH_STUDENT_BY_ID, async (id) => {
  const [error, result] = await to(getStudentByid, id);
  if(!error && result){
    return result;
  }
  return [];
});
export { fetchAllStudents, fetchStudentByid };
