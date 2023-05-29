import React from 'react'
import {Card} from 'semantic-ui-react'

function AssociateCard({worker,handleDelete}) {
  function handleWorkerDelete(){
    fetch(`http://localhost:3001/workers/${worker.id}`,{
      method:'DELETE'
    })
    .then(r=>r.json())
    .then(data=>handleDelete(worker.id))
  }

    return (
      <Card>
      <div>
        <div className="image">
          <img className="worker-avatar" src={worker.image}alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{worker.name}</div>
        </div>
        <div className="extra content">
          <span>
            <ul/>
            Uptime {worker.uptime}
            <ul/>
            Cases Per Hour {worker.casesPerHour}
            <ul/>
            Absenteeism {worker.attendance}
          </span>
          <button onClick={handleWorkerDelete}>🗑</button>
        </div>
      </div>
    </Card>
    );
  }

  export default AssociateCard