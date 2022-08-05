import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/productService";
import { FETCH_ALL_STUDENTS } from "./actionTypes";

const fetchAllStudents = createAsyncThunk(FETCH_ALL_STUDENTS, async () => {
  const students = await getProducts();
  return students;
});

export { fetchAllStudents };
