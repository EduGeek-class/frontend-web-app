import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { addVideos } from "../apiClient/apiClient";
import Swal from 'sweetalert2'
import { useState } from "react";

var title;
var class_number;
var video;


function AddVideoModal(videos, setVideos) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await addVideos(title, class_number, video);
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
        Add Video
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
              <Form.Label>Class Number</Form.Label>
              <Form.Select onChange={(e) => {
                      class_number = e.target.value;
                      console.log(class_number)
                    }}>
                <option>Class Number</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
                <option value="11">Eleven</option>
                <option value="12">Twelve</option>
            </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Video</Form.Label>
            <Form.Control type="file" onChange={(e) => {
                      video = e.target.files[0];
                      console.log(video);
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

export default AddVideoModal;
