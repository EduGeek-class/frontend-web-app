import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes ,useParams} from "react-router-dom";
import { getMaterial } from "../apiClient/apiClient";
import AddMaterialModal from "./AddMaterialModal";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function StudyMaterial() {
  const [material, setMaterial] = useState([]);
  const { batch_code, subject_code } = useParams();
  useEffect(async () => {
    const res = await getMaterial(batch_code, subject_code);
    setMaterial(res.data);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Sidenav batch_code={batch_code} subject_code={subject_code}/>
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
                    <Card style={{marginBottom:"2rem"}}>
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
            <Notif/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyMaterial;
