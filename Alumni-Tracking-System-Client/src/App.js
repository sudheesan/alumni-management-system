import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import PrivateRoute from "./components/helpers/privateRoute"
import Auth from './components/modules/auth';
import Main from "./components/modules";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/discover/*" element={<PrivateRoute><Main /></PrivateRoute>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
