import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "../routes/login";
import SignUp from "../routes/signup";
import Home from "../routes/home";
import Side from "./Side";
import Nickname from "../routes/nickname";



const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <Router>
            <Side isLoggedIn={isLoggedIn} logout={() => setIsLoggedIn(false)}/>
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
                    <Nickname />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;