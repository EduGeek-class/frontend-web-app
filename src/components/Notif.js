import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {getNotif} from "../apiClient/apiClient";



function Notif() {
  const [notif,setNotif]=useState([]);
  useEffect(async () => {
    const res = await getNotif();
    setNotif(res.data);
    console.log(res.data);
    console.log(notif);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          
          <Col>
          {notif.map((data) => (
            <Card border="primary" style={{ width: "18rem" ,marginBottom:"1%",marginTop:"1%"}}>
            
              <Card.Header>{data.notif_type}</Card.Header>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  {data.desc}
                </Card.Text>
              </Card.Body>
            
            </Card>
            ))}
            <br />

            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Notif;
