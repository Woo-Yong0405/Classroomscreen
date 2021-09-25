import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fb"

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    function signClick() {
        history.push("/signup");
    }
    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "email") {
          setEmail(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };
    async function onLogInClick(event) {
        event.preventDefault();
        try {
            await authService.signInWithEmailAndPassword(email, password);
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div id="center">
            <div id="login1">
                <header>
                    <h1>Log In</h1>
                </header>
                <div id="login_main">
                    <div id="socialLogIn">
                        <button>Log In With Google</button>
                        <button>Log In With Microsoft</button>
                    </div>
                    <p>or</p>
                    <form>
                        <input id="email1" onChange={onChange} name="email" type="text" placeholder="E-mail" />
                        <input id="password1" onChange={onChange} name="password" type="password" placeholder="Password" />
                        <button onClick={onLogInClick}>Log In</button>
                    </form>
                    <p>You have not got an account yet? <span onClick={signClick}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LogIn;