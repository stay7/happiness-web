import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/loginPage";
import HomePage from "./page/homePage";
import RecordPage from "./page/recordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/record" element={<RecordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
