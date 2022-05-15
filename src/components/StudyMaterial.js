import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getMaterial } from "../apiClient/apiClient";
import AddMaterialModal from "./AddMaterialModal";


import ReactPlayer from "react-player";
function StudyMaterial() {
  const [material, setMaterial] = useState([]);
  
  useEffect(async () => {
    const res = await getMaterial();
    setMaterial(res.data);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Sidenav />
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <h2>Class 10 Science</h2>
              </Col>
              <Col xs={6}>
                <AddMaterialModal/>
              </Col>
            </Row>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px" }}>
                  {material.map((data) => (
                    <Card>
                      <Card.Header as="h5">Class: {data.class_number}</Card.Header>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20" />
                      <Card.Body>
                       
                      
                      <Card.Title>Title: {data.title}</Card.Title>
                      <Button href={data.material}>Link</Button> 
                        
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </div>
            </div>
          </Col>
          <Col>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Live Classes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Zoom Classes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Recent Announcement</Card.Title>
                <Card.Text>No Announcement</Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyMaterial;
