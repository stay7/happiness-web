import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InitPage from "./page/initPage";
import HomePage from "./page/homePage";
import RecordPage from "./page/recordPage";
import {SignupPage} from "./page/signupPage";
import {LoginPage} from "./page/loginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<InitPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/record" element={<RecordPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
