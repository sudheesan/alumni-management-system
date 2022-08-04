

import React from "react";
import { Routes, Route, } from "react-router-dom";

import Profile from "../modules/account/profile";
import MyJobList from "../modules/jobs/myJobsList";
import JobPost from "../modules/jobs/jobPost";
import JobAdList from "../modules/jobs/jobAdList";
import StudentList from "../modules/students/studentList";
import Discover from "../modules/discover";

import PrivateRoute from "../helpers/privateRoute";

const ModuleRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Discover /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/jobPost" element={<PrivateRoute><JobPost /></PrivateRoute>} />
            <Route path="/jobAdList" element={<PrivateRoute><JobAdList /></PrivateRoute>} />
            <Route path="/jobList" element={<PrivateRoute><MyJobList /></PrivateRoute>} />
            <Route path="/students" element={<PrivateRoute><StudentList /></PrivateRoute>} />
        </Routes>
    );
}

export default ModuleRoutes;