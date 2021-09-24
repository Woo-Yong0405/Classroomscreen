import React from "react";

function Side() {
    return (
        <div id="side">
            <div id="auth">
                <img id="logo" src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" alt=""/>
                <div id="text">
                    <p>Go to: <span id="login">login</span>/<span id="signup">signup</span></p>
                </div>
            </div>
            <div id="buttons">
                <button>New Screen</button>
                <button>New Poll</button>
                <button>New Group Maker</button>
            </div>
            <button id="loginBtn">Log In</button>
        </div>
    )
}

export default Side;