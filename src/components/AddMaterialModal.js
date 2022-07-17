import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { addMaterial } from "../apiClient/apiClient";
import Swal from 'sweetalert2'
import { useState } from "react";

var title;
var batch_code;
var material;


function AddMaterialModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await addMaterial(title, batch_code, material);
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
        Add Study Material
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Course details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" onChange={(e) => {
                      title = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Code</Form.Label>
              <Form.Control type="text" placeholder="Batch code" onChange={(e) => {
                      batch_code = e.target.value;
                    }}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>material</Form.Label>
            <Form.Control type="file" onChange={(e) => {
                      material = e.target.files;
                      console.log(material);
                    }} multiple/>
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

export default AddMaterialModal;
