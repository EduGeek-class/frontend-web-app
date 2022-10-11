import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createBatch} from "../apiClient/apiClient";
import Swal from 'sweetalert2'
import { useState } from "react";

var course_validity="";
var batch_code;
var course_name="";
var price="";
var description="";

function ModalPage(batches, setBatches) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await createBatch(course_validity, course_name,price,description);
      batches.setBatches([...batches.batches, {
      'course_validity' : course_validity, 
      
      'course_name' : course_name,
      'price':price,
      'description':description,
      
    }])
    handleClose();
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Batch Created successfully',
    })
    setTimeout(function(){
      window.location.reload();
   }, 2000);
  }
 
  return (
    <div>
      <div className="d-grid gap-2" style={{padding:"0 20% "}}>
      <Button variant="primary" onClick={handleShow} >
        Create batch
      </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Batch details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Name</Form.Label>
              <Form.Control type="text" placeholder="Eg: Class 1 Maths" onChange={(e) => {
                      course_name = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Eg. Organic Chemistry" onChange={(e) => {
                      description = e.target.value;
                    }}/>
            </Form.Group>
           
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Code</Form.Label>
              <Form.Control type="text" placeholder="Ex: 220103" onChange={(e) => {
                      batch_code = e.target.value;
                    }}/>
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Course Validity</Form.Label>
            <Form.Control type="date/time" placeholder="Ex: 2020-01-12" onChange={(e) => {
                      course_validity = e.target.value;
                    }} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ex: 10000" onChange={(e) => {
                      price = e.target.value;
                    }} />
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

export default ModalPage;
