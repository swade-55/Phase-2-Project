import React,{useState} from 'react'
import {Form} from 'semantic-ui-react'


function AssociateForm({onAddWorker}){
  const [formData, setFormData] = useState({
    name:'',
    uptime:'',
    casesPerHour:'',
    attendance:'',
    image:'', 
  })
  function handleChange(event){
    setFormData({
      ...formData,[event.target.name]:event.target.value,
    })
  }
  function handleSubmit(){
    const newAssociate = {
      name:formData.name,
      uptime:parseInt(formData.uptime,10),
      casesPerHour:parseInt(formData.casesPerHour,10),
      attendance:parseInt(formData.attendance,10),
      image:formData.image,
    }
  fetch(`http://localhost:3001/workers`,{
    method:'POST'                     ,
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newAssociate)
  })
  .then(r=>r.json())
  .then(onAddWorker)
}

function alertSubmit(){
  alert('Form Submitted!')
}
    return (
        <div>
        <h3>Add an Associate!</h3>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group className="field" widths="equal">
            <Form.Input type="text" fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            <Form.Input  fluid label="Uptime" placeholder="uptime" name="uptime" value={formData.uptime} onChange={handleChange} />
            <Form.Input  fluid label="Cases Per Hour" placeholder="casesPerHour" name="casesPerHour" value={formData.casesPerHour} onChange={handleChange} />
            <Form.Input  fluid label="Attendance Percentage" placeholder="attendance" name="attendance" value={formData.attendance} onChange={handleChange} />
            <Form.Input
              fluid
              label="Link to Associate Picture"
              placeholder="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Button onClick={alertSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }

export default AssociateForm