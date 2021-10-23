import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "../routes/login";
import SignUp from "../routes/signup";
import Home from "../routes/home";
import Side from "./Side";
import Nickname from "../routes/nickname";



const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nickname, setNickname] = useState("");
    return(
        <Router>
            <Side isLoggedIn={isLoggedIn} logout={() => setIsLoggedIn(false)} nickname={nickname} setNickname={(a) => setNickname(a)}/>
            <Switch>
                <Route exact path="/">
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
                <Route path="/login">
                    <LogIn login={() => setIsLoggedIn(true)}/>
                </Route>
                <Route path="/signup">
                    <SignUp login={() => setIsLoggedIn(true)}/>
                </Route>
                <Route path="/changenickname">
                    <Nickname nickname={nickname} setNickname={(a) => setNickname(a)}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;