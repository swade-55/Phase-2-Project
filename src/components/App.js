import React,{useState,useEffect} from 'react'
import MasterOperatingPlan from './MasterOperatingPlan'
import NavBar from "./NavBar"
import {Route,Switch} from "react-router-dom"
import About from "./About"
import AssociateForm from './AssociateForm'


function App() {
  const [workers,setWorkers] = useState([])
  useEffect(()=>{
    console.log('in use effect')
      fetch(`http://localhost:3001/workers`)
      .then(r=>r.json())
      .then(setWorkers)        
  },[])
  function handleAddWorkers(newWorker) {
    setWorkers([...workers, newWorker]);
  }
  return (
    <div>
        <NavBar/>
        <Switch>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/employeeform">
                <AssociateForm onAddWorker={handleAddWorkers}/>
            </Route>
            <Route exact path="/">
            <MasterOperatingPlan workers={workers} setWorkers={setWorkers}/>
            </Route>
      </Switch>
    </div>
    
  );
}

export default App;