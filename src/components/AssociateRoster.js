import React from "react";
import AssociateCard from "./AssociateCard";
import { Card } from "semantic-ui-react";

function AssociateRoster({workers,handleDelete}) {
    const workersList = workers.map(worker=>{
        return <AssociateCard key={worker.id} worker={worker} handleDelete={handleDelete}/>
    })
  return (
    <Card.Group itemsPerRow={4}>
      {workersList}
    </Card.Group>
  );
}

export default AssociateRoster;