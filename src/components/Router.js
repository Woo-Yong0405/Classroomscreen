import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "../routes/login";
import SignUp from "../routes/signup";
import Home from "../routes/home";
import Side from "./Side";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <Router>
            <Side isLoggedIn={isLoggedIn}/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <LogIn login={() => setIsLoggedIn(true)}/>
                </Route>
                <Route path="/signup">
                    <SignUp login={() => setIsLoggedIn(true)}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;