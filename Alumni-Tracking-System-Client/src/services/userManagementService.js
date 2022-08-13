import { getAxiosClient } from "./httpService";
import { getEmail } from "./userService";

const axios = getAxiosClient();

const getUserByEmail = async () => {
  const result = await axios.get(`/users/${getEmail()}`);
  return result.data;
};
const updateUser = async (params) => {
  const {
    id,
    userType,
    department,
    city,
    state,
    gpa,
    firstName,
    lastName,
    email,
    major,
    experience,
  } = params;

  const commonBody = {
    firstName,
    lastName,
    email,
    experience
  };
  let result = null;
  if (userType === "Admin") {
    result = await axios.put(`/users/${id}`, {
      ...commonBody,
      city,
      state,
    });
  } else if (userType === "Student") {
    result = await axios.put(`/students/${id}`, {
      ...commonBody,
      city,
      state,
      gpa,
      major, 
    });
  } else if (userType === "Faculty") {
    result = await axios.put(`/faculties/${id}`, {
      ...commonBody,
      city,
      state,
      department,
    });
  }

  return result.data;
};
export { getUserByEmail, updateUser };
