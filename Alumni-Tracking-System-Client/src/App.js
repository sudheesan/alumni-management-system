import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import PrivateRoute from "./components/helpers/privateRoute"
import Auth from './components/modules/auth';
import Main from "./components/modules";


import "bootstrap/dist/css/bootstrap.min.css";
import {getFCMToken, onMessageListener} from "./utils/firebase";

function App() {

  const [show, setShow] = useState(false);

  const [isTokenFound, setTokenFound] = useState(false);

  getFCMToken(setTokenFound).then(r => console.log("rrrrrr", r));

  onMessageListener().then(payload => {
    setShow(true);
    alert(payload.notification.title + "\n" + payload.notification.body );
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

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
