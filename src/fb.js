import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAotO81FCPGkDycwE9HsfzuEJjZ0r0tNPM",
    authDomain: "classroomscreen-9d013.firebaseapp.com",
    projectId: "classroomscreen-9d013"
};

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();