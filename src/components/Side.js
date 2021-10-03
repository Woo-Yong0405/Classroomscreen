import React from "react";
import { useHistory } from "react-router-dom";

const Side = prop => {
    const history = useHistory();
    let text;
    let btnText;
    let id1;
    let id2;
    function logClick() {
        if(prop.isLoggedIn === true) {
            prop.logout();
        } else {
            history.push("/login");
        }
    }
    function signClick() {
        history.push("/signup");
    }
    function onHomeClick() {
        history.push("/");
        id1 = "green";
    }
    function onNickClick() {
        history.push("/changenickname");
        id2 = "green";
    }
    if (prop.isLoggedIn === true) {
        text = <p>{prop.nickname}</p>
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
            <button className="changeNickname" onClick={onHomeClick} id={id1}>Home</button>
            {prop.isLoggedIn && (<button className="changeNickname" onClick={onNickClick} id={id2}>Change Nickname</button>)}
            <button id="loginBtn" onClick={logClick}>{btnText}</button>
        </div>
    )
}

export default Side;