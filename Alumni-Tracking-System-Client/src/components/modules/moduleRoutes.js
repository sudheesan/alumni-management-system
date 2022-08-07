import React from "react";
import { Routes, Route } from "react-router-dom";

import Profile from "../modules/account/profile";
import MyJobList from "../modules/jobs/myadds";
import JobAdList from "../modules/jobs/jobAds";
import StudentList from "../modules/students/studentList";

import Discover from "../modules/discover";

import PrivateRoute from "../helpers/privateRoute";
import StudentRoutes from "./students/studentRoutes";

const ModuleRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Discover />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/jobAdList"
        element={
          <PrivateRoute>
            <JobAdList />
          </PrivateRoute>
        }
      />
      <Route
        path="/jobList"
        element={
          <PrivateRoute>
            <MyJobList />
          </PrivateRoute>
        }
      />
      <Route
        path="/students/*"
        element={
          <PrivateRoute>
            <StudentRoutes />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default ModuleRoutes;
