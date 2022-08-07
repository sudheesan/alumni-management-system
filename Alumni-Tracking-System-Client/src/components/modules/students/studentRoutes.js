import React from "react";
import { Routes, Route } from "react-router-dom";

import StudentDetails from "./studentDetails";
import StudentList from "./studentList";
import PrivateRoute from "../../helpers/privateRoute";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <StudentList />
          </PrivateRoute>
        }
      />
      <Route
        path=":student"
        element={
          <PrivateRoute>
            <StudentDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default StudentRoutes;
