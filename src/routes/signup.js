import React from "react";

const SignUp = () => {
    return (
        <div id="center">
            <div id="signup">
                <form>
                    <input id="email" type="text" placeholder="E-mail" />
                    <input id="password" type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;