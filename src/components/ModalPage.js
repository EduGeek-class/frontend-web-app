import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createBatch} from "../apiClient/apiClient";
import Swal from 'sweetalert2'
import { useState } from "react";

var batch_start="";
var batch_code;
var course="";
var category="";
var subject="";

function ModalPage(batches, setBatches) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await createBatch(batch_start, batch_code, course,category,subject);
      batches.setBatches([...batches.batches, {
      'batch_start' : batch_start, 
      'batch_code' : batch_code,
      'course' : course,
      'category':category,
      'subject':subject
    }])
    handleClose();
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'File uploaded successfully',
    })
    setTimeout(function(){
      window.location.reload();
   }, 2000);
  }
 
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create batch
      </Button>

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
              <Form.Control type="text" placeholder="Ex: Class 1 Maths" onChange={(e) => {
                      course = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Category</Form.Label>
              <Form.Control type="text" placeholder="Ex: Class 1" onChange={(e) => {
                      category = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Ex: Maths" onChange={(e) => {
                      subject = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Code</Form.Label>
              <Form.Control type="text" placeholder="Ex: 220103" onChange={(e) => {
                      batch_code = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Start Date</Form.Label>
            <Form.Control type="text" placeholder="Ex: 2020-01-12" onChange={(e) => {
                      batch_start = e.target.value;
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
