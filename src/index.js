import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashBoard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import CardComponent from './Components/Card/Card';
import AddEditTask from './Components/Add-Edit-Task/Add-Edit-Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
