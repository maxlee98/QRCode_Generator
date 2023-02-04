import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/Login";
import QRPage from "./pages/QRPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<QRPage />} />
      </Routes>
    </BrowserRouter>
  );
}
