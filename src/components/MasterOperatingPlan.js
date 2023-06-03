import React,{useState,useEffect} from 'react'
import AssociateRoster from './AssociateRoster'
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
    const [headCount,setHeadCount] = useState('')
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
          let totalAttendance = attendanceArray.reduce((attendanceSum,b)=>attendanceSum+b,0)
          const attendanceAverage = parseInt(totalAttendance/attendanceArray.length,10)
          const cphArray = data.map(cases=>{
            return cases['casesPerHour']
          })
          let totalCPH = cphArray.reduce((cphSum,a)=>cphSum+a,0)
          const cphAverage = parseInt(totalCPH/cphArray.length,10)

          const uptimeArray = data.map(cases=>{
            return cases['uptime']
          })
          let totalUptime = uptimeArray.reduce((uptimeSum,a)=>uptimeSum+a,0)
          const uptimeAverage = parseInt(totalUptime/uptimeArray.length,10)

          const capacity = casesArray.reduce((partialSum, a) => partialSum + a, 0);
          setWorkers(data)
          setTotalCapacity(capacity)
          setAverageAttendance(attendanceAverage)
          setAverageCPH(cphAverage)
          setAverageUptime(uptimeAverage)
          const totalHeadcount = casesArray.length
          setHeadCount(totalHeadcount)
        })
    },[])
    console.log('this is averageAttendance',averageAttendance)
    function handleDelete(id){
      const filteredWorkers = workers.filter(worker=>worker.id!==id)
      setWorkers(filteredWorkers)
    }
    // function handleAddAssociate(newAssociate){
    //   setWorkers([...workers,newAssociate])
    // }
    const workersToDisplay = workers.filter(worker=>(
      worker.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return (
        <Container>
          <Header totalCapacity={totalCapacity} averageAttendance={averageAttendance} averageCPH = {averageCPH} averageUptime={averageUptime} headCount = {headCount}/>
          <h1>Capacity Planner</h1>
          <br />
          <Search search={searchTerm} onSearch={setSearchTerm}/>
          <br />
          <AssociateRoster workers = {workersToDisplay} handleDelete={handleDelete}/>
        </Container>
      );
}

export default MasterOperatingPlan;