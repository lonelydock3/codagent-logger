import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDfr2fl4fwIkhMN65p4BsU3tZSRz9sk2H8",
    authDomain: "codagent-logger.firebaseapp.com",
    projectId: "codagent-logger",
    storageBucket: "codagent-logger.appspot.com",
    messagingSenderId: "342214057380",
    appId: "1:342214057380:web:8e8b00293ed8dfd8307531",
    measurementId: "G-5HMRG556QN"
});

export default firebaseConfig;
