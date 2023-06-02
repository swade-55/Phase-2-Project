import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import About from "./components/About"
import MasterOperatingPlan from "./components/MasterOperatingPlan";

ReactDOM.render(<BrowserRouter>
<NavBar/>
<Switch>
    <Route exact path="/about">
        <About/>
    </Route>
    <Route exact path="/">
        <MasterOperatingPlan/>
    </Route>
<App />
</Switch>
</BrowserRouter>, document.getElementById("root"));
