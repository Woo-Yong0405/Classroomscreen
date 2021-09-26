import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fb";

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
    return (
        <div id="center">
            <div id="signup">
                <header>
                    <h1>Sign Up</h1>
                </header>
                <div id="signup_main">
                    <div id="socialLogIn">
                        <button>Sign Up With Google</button>
                        <button>Sign Up With Microsoft</button>
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