import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStudents } from "../services/studentService";
import { FETCH_ALL_STUDENTS } from "./actionTypes";
import to from "../utils/to";

const fetchAllStudents = createAsyncThunk(FETCH_ALL_STUDENTS, async () => {
  const [error, result] = await to(getStudents);
  if(!error && result){
    return result;
  }
  return [];
});

export { fetchAllStudents };
