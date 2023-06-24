import React,{useState} from 'react'
import AssociateRoster from './AssociateRoster'
import Search from './Search'
import Header from './Header'
import { Container } from "semantic-ui-react";

function MasterOperatingPlan({workers,setWorkers}){
    const [searchTerm,setSearchTerm] = useState('')
    console.log('hello')
    function handleDelete(id){
      const filteredWorkers = workers.filter(worker=>worker.id!==id)
      console.log('about to call setter')
      setWorkers(filteredWorkers)
    }

    let attendanceArray = workers.map(cases=>{
      return cases['attendance']
    })
    let totalAttendance = attendanceArray.reduce((attendanceSum,b)=>attendanceSum+b,0)
    const attendanceAverage = !! parseInt(totalAttendance/attendanceArray.length,10) ? parseInt(totalAttendance/attendanceArray.length,10) : 0
    const cphArray = workers.map(cases=>{
      return cases['casesPerHour']
    })
    let totalCPH = cphArray.reduce((cphSum,a)=>cphSum+a,0)
    const cphAverage = !! parseInt(totalCPH/cphArray.length,10) ? parseInt(totalCPH/cphArray.length,10) : 0

    const uptimeArray = workers.map(cases=>{
      return cases['uptime']
    })
    let totalUptime = uptimeArray.reduce((uptimeSum,a)=>uptimeSum+a,0)
    const uptimeAverage = !! parseInt(totalUptime/uptimeArray.length) ? parseInt(totalUptime/uptimeArray.length) : 0
    console.log(uptimeAverage)

    const casesArray = workers.map(cases=>{
      return cases['casesPerHour']*(cases['uptime']/100)*8
    })
    const capacity = casesArray.reduce((partialSum, a) => partialSum + a, 0);
    const workersToDisplay = workers.filter(worker=>(
      worker.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    const totalHeadcount = casesArray.length
    return (
        <Container>
          <br/>
          <Search search={searchTerm} onSearch={setSearchTerm}/>
          <Header totalCapacity={capacity} averageAttendance={attendanceAverage} averageCPH = {cphAverage} averageUptime={uptimeAverage} headCount = {totalHeadcount}/>
          <h1>Capacity Planner</h1>
          <br />
          <AssociateRoster workers = {workersToDisplay} handleDelete={handleDelete}/>
        </Container>
      );
}

export default MasterOperatingPlan;