import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAotO81FCPGkDycwE9HsfzuEJjZ0r0tNPM",
    authDomain: "classroomscreen-9d013.firebaseapp.com",
    projectId: "classroomscreen-9d013"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();