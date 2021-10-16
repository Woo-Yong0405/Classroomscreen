import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "../routes/login";
import SignUp from "../routes/signup";
import Home from "../routes/home";
import Side from "./Side";
import Nickname from "../routes/nickname";



const AppRouter = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nickname, setNickname] = useState("Anonymous");
    const [userObj, setUserObj] = useState(null);
    return(
        <Router>
            <Side isLoggedIn={isLoggedIn} logout={() => setIsLoggedIn(false)} nickname={nickname}/>
            <Switch>
                <Route exact path="/">
                    <Home isLoggedIn userObj={userObj}/>
                </Route>
                <Route path="/login">
                    <LogIn login={() => setIsLoggedIn(true)} userObj={userObj} setUserObj={(thing) => setUserObj(thing)}/>
                </Route>
                <Route path="/signup">
                    <SignUp login={() => setIsLoggedIn(true)}/>
                </Route>
                <Route path="/changenickname">
                    <Nickname nickname={nickname} setNickname={(message) => setNickname(message)}userObj={userObj} setUserObj={(thing) => setUserObj(thing)}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;