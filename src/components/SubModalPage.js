import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createSubject} from "../apiClient/apiClient";
import Swal from 'sweetalert2'
import { useState } from "react";
import { useParams } from "react-router-dom"
var subject_name="";
var batch_code;
var subject_code;


function SubModalPage(batches, setBatches) {
  const [show, setShow] = useState(false);
  const { batch_code } = useParams()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await createSubject(subject_name, batch_code)
    console.log(batches)
      batches.setBatches([...batches.sub, {
     'subject_name':subject_name,
    
      'batch_code' : batch_code,
      
    }])
    handleClose();
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Subject Created successfully',
    })
    setTimeout(function(){
      window.location.reload();
   }, 2000);
  }
 
  return (
    <div>
      <div className="d-grid gap-2" style={{padding:"0 20% "}}>
      <Button variant="primary" onClick={handleShow}>
        Create Subject
      </Button>
    </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Subject details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Eg: Maths" onChange={(e) => {
                      subject_name = e.target.value;
                    }}/>
            </Form.Group>
           
           
            
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SubModalPage;
