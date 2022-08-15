import React from "react";
import { getBatchesSingle } from "../apiClient/apiClient";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function BatchInfo() {
  const { batch_code } = useParams();
  const [batchesinfo, setBatchesInfo] = useState([]);

  useEffect(async () => {
    const res = await getBatchesSingle(batch_code);
    setBatchesInfo(res.data);
    console.log(res.data);
    console.log(batchesinfo);
  }, []);
  return (
    <div style={{ padding: " 40px",fontSize:"20px" }}>
      
      <Row style={{ padding: "10px 40px" }}>
        <h4>Batch Details</h4>
         

       <br></br>
     
        <Col>Course Name</Col>
        <Col>{batchesinfo.course_name}</Col>
        <Col></Col>
    

        
      </Row>

      <Row style={{ padding: "10px 40px" }}>
       
     
        <Col>Description</Col>
        <Col>{batchesinfo.description}</Col>
    
        <Col></Col>
        
      </Row>
      <Row style={{ padding: "10px 40px" }}>
       
     
        <Col>Batch Code</Col>
        <Col>{batchesinfo.batch_code}</Col>
        <Col></Col>

        
      </Row>
      <Row style={{ padding: "10px 40px" }}>
       
     
        <Col>Course Validity</Col>
        <Col>{batchesinfo.course_validity}</Col>
        <Col></Col>

        
      </Row>
      <Row style={{ padding: "10px 40px" }}>
       
     
       <Col>Price</Col>
       <Col>{batchesinfo.price}</Col>
   
       <Col></Col>
       
     </Row>
    </div>
  );
}

export default BatchInfo;
