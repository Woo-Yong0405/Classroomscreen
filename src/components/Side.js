import React from "react";
import { useHistory } from "react-router-dom";
import { isLoggedIn } from "./App";

const Side = () => {
    const history = useHistory();
    let text;
    let btnText;
    function logClick() {
        history.push("/login");
    }
    function signClick() {
        history.push("/signup");
    }
    if (isLoggedIn === true) {
        text = <p>Logged In</p>
        btnText = "Log Out"
    } else {
        text = <p>Go to: <span id="login" onClick={logClick}>login</span>/<span id="signup" onClick={signClick}>signup</span></p>
        btnText = "Log In"
    }
    return (
        <div id="side">
            <div id="auth">
                <img id="logo" src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" alt=""/>
                <div id="text">{text}</div>
            </div>
            <div id="buttons">
                <button>New Screen</button>
                <button>New Poll</button>
                <button>New Group Maker</button>
            </div>
            <button id="loginBtn" onClick={logClick}>{btnText}</button>
        </div>
    )
}

export default Side;