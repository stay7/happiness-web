import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {RecoilRoot} from "recoil";
import firebase from "firebase/compat/app";
import {getAnalytics} from "firebase/analytics"
import {getMessaging, getToken} from "firebase/messaging"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </React.StrictMode>
);

const firebaseConfig = {
    apiKey: "AIzaSyCuoIQteON-ObreI64H2LY3Vb48Qbk9vVs",
    authDomain: "happiness-48e3a.firebaseapp.com",
    projectId: "happiness-48e3a",
    storageBucket: "happiness-48e3a.appspot.com",
    messagingSenderId: "909621199681",
    appId: "1:909621199681:web:b19a479dd8fc7ae82117c0",
    measurementId: "G-5LYGPWBH3R"
};

const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
const messaging = getMessaging(app)

getToken(messaging, {vapidKey: 'BAlNt9qZax3kNIgLoLem5KPzjsVUj3dscvGe4q7WRFM7gmU565wbT6Yf1tluWbQrXzjV5rmkGdzm6yfMYGp5Ag0'}).then((value) => console.log(value))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
