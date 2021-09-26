import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, firebaseInstance } from "../fb";

const SignUp = prop => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    function logClick() {
        history.push("/login");
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
    async function onSignUpClick(event) {
        event.preventDefault();
        try {
            await authService.createUserWithEmailAndPassword(email, password);
            history.push("/");
            prop.login();
        } catch (error) {
            alert(error.message)
        }
    }
    const onSocialClick = async (event) => {
        const {
          target: { name },
        } = event;
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    };
    return (
        <div id="center">
            <div id="signup">
                <header>
                    <h1>Sign Up</h1>
                </header>
                <div id="signup_main">
                    <div id="socialLogIn">
                        <button onClick={onSocialClick}>Sign Up With Google</button>
                    </div>
                    <p>or</p>
                    <form>
                        <input id="email1" onChange={onChange} name="email" type="text" placeholder="E-mail" required />
                        <input id="password1" name="password" onChange={onChange} type="password" placeholder="Password" required />
                        <button onClick={onSignUpClick}>Sign Up</button>
                    </form>
                    <p>Do you already have an account? <span onClick={logClick}>Log In</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;