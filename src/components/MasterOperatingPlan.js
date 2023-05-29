import React,{useState,useEffect} from 'react'
import AssociateRoster from './AssociateRoster'
import AssociateForm from './AssociateForm'
import Search from './Search'
import Header from './Header'
import { Container } from "semantic-ui-react";

function MasterOperatingPlan(){
    const [workers,setWorkers] = useState([])
    const [totalCapacity, setTotalCapacity] = useState('')
    const [averageCPH,setAverageCPH] = useState('')
    const [averageUptime,setAverageUptime] = useState('')
    const [averageAttendance,setAverageAttendance] = useState('')
    const [searchTerm,setSearchTerm] = useState('')
    useEffect(()=>{
        fetch(`http://localhost:3001/workers`)
        .then(r=>r.json())
        .then(data=>{
          const casesArray = data.map(cases=>{
            return cases['casesPerHour']*(cases['uptime']/100)*8
          })
          let attendanceArray = data.map(cases=>{
            return cases['attendance']
          })
          console.log("this is attendance array",attendanceArray)
          let totalAttendance = attendanceArray.reduce((attendanceSum,b)=>attendanceSum+b,0)
          console.log("this is total attendance",totalAttendance)
          const attendanceAverage = totalAttendance/attendanceArray.length
          console.log("this is average Attendance",attendanceAverage)
          const cphArray = data.map(cases=>{
            return cases['casesPerHour']
          })
          const capacity = casesArray.reduce((partialSum, a) => partialSum + a, 0);
          setWorkers(data)
          setTotalCapacity(capacity)
          setAverageAttendance(attendanceAverage)
          console.log('this is attendaceArray',attendanceArray)
          console.log('this is total attendance',totalAttendance)
        })
    },[])
    console.log('this is averageAttendance',averageAttendance)
    function handleDelete(id){
      const filteredWorkers = workers.filter(worker=>worker.id!==id)
      setWorkers(filteredWorkers)
    }
    function handleAddAssociate(newAssociate){
      setWorkers([...workers,newAssociate])
    }
    const workersToDisplay = workers.filter(worker=>(
      worker.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return (
        <Container>
          <Header totalCapacity={totalCapacity} averageAttendance={averageAttendance}/>
          <h1>Capacity Planner</h1>
          <br />
          <AssociateForm onAddAssociate={handleAddAssociate}/>
          <br />
          <Search search={searchTerm} onSearch={setSearchTerm}/>
          <br />
          <AssociateRoster workers = {workersToDisplay} handleDelete={handleDelete}/>
        </Container>

// <div class="float-parent-element">
// <div class="float-child-element">
//   <div class="red">Float Column 1</div>
// </div>
// <div class="float-child-element">
//   <div class="yellow">Float Column 2</div>
// </div>
// </div>
      );
}

export default MasterOperatingPlan;