import React from 'react'
import MasterOperatingPlan from './MasterOperatingPlan'
import NavBar from "./NavBar"
import {Route,Switch} from "react-router-dom"
import About from "./About"


function App() {
  return (
    <div>
        <NavBar/>
        <Switch>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/">
            <MasterOperatingPlan />
            </Route>
      </Switch>
    </div>
    
  );
}

export default App;