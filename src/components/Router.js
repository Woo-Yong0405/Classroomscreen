import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Side from "./Side";

const AppRouter = () => {
    return(
        <Router>
            <Side />
            <Switch>
                
            </Switch>
        </Router>
    )
}

export default AppRouter;