import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import firebase from "firebase/app";
import "firebase/auth";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./container/App";
import "./index.scss";
import registerServiceWorker from "./registerServiceWorker";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
