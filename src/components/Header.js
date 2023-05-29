import React from 'react'

function Header({totalCapacity,averageAttendance}) {
  return (
        <div class="ui-statistic">
          <div class="value">{averageAttendance}</div>
          <div class="label">Average Attendance</div>
        </div>
        // <h2>{averageAttendance}</h2>
        // <h3>Total Capacity</h3>
        // <h2>{totalCapacity}</h2>
  );
}

export default Header;
