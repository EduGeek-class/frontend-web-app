import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { getStudents } from "../apiClient/apiClient";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function Students(code) {
  const [student, setStudent] = useState([]);
  const { batch_code, subject_code } = useParams();
  
  useEffect(async () => {
    const res = await getStudents(batch_code);
    setStudent(res);
    console.log(res);
    console.log(student);
  }, []);
  return (
    <div style={{marginTop:"5%"}}>
      <Container>
        <Row>
          <Col>
            <Sidenav  batch_code={batch_code} subject_code={subject_code}/>
          </Col>
          <Col xs={6}>
            <h2>List of Students</h2>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px" }}>
                  {student.map((data) => (
                    <Card >
                      <Card.Header>{data.name}</Card.Header>
                      {/* <Card.Img variant="top" style={{width:"100px",height:"100px",borderRadius:"50%"}} src={data.image}></Card.Img> */}

                        
                      <Card.Text style={{padding:"10px"}}>Phone:{data.phone} <br/> Email :{data.email}
                      <br></br>

                      </Card.Text>
                    </Card>
                  ))}
                </Col>
              </div>
            </div>
          </Col>
          <Col>
          <Notif/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Students;
