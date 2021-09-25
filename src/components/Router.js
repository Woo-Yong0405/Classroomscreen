import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "../routes/login";
import SignUp from "../routes/signup";
import Home from "../routes/home";
import Side from "./Side";

const AppRouter = ({ isLoggedIn }) => {
    return(
        <Router>
            <Side />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;