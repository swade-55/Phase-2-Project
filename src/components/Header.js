import React from 'react'

function Header({totalCapacity,averageAttendance,averageCPH, averageUptime,headCount}) {
  return (
    <table class="ui definition table">
      <thead>
        <tr><th></th>
          <th>Metrics</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td>Total Capacity</td>
          <td>{totalCapacity} Cases</td>
          <td>(average associate cases per hour * average uptime percentage) * 8 hour day</td>
        </tr>
        <tr>
          <td>Total Headcount</td>
          <td>{headCount} Workers</td>
          <td>Sums of total employees scheduled</td>
        </tr>
        <tr>
          <td>Average Attendance</td>
          <td>{averageAttendance} %</td>
          <td>Average attendance of all employees</td>
        </tr>
        <tr>
          <td>Average Cases Per Hour</td>
          <td>{averageCPH}</td>
          <td>Average cases per hour of all employees</td>
        </tr>
        <tr>
          <td>Average Uptime</td>
          <td>{averageUptime} %</td>
          <td>Average uptime of all employees</td>
        </tr>
      </tbody></table>
  
  );
}

export default Header;