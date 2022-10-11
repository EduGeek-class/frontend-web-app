import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ModalPage from "./ModalPage";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { getSubject } from "../apiClient/apiClient"
import SubModalPage from "./SubModalPage";
import Sidenav from "./SidenavBatch";

function Classpage() {
    const { batch_code } = useParams();
  const [sub, setSubject] = useState([]);

  useEffect(async () => {
    const res = await getSubject(batch_code);
    setSubject(res.data);
    console.log(res.data);
    console.log(sub);
  }, [])

  return (
    <div>
     
      <Row style={{paddingTop:"2rem"}}>
        <Col>
        <Sidenav code={batch_code}/>
        
      <SubModalPage sub={sub} setBatches={setSubject}/>
      </Col>
      </Row>
     <div style={{padding:"5rem"}}>
      <Row style={{padding:"40px"}}>
        {
          sub.map(subject => 
            <Col xs="4">
          <Card style={{padding:"40px"}}>
          <Card.Link href={"/video/" + subject.batch_code + "/" + subject.subject_code} style={{fontStyle:"none"}}>
            <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFRUXFxUXFxgYFxcXFxcVFRUXFxcXFRcYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDi0ZFRkrKy03KysrKysrNysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAb/xAAkEAEBAQAABQQDAQEAAAAAAAAAARECIUFh8BJRkaExcYGxE//EABcBAQEBAQAAAAAAAAAAAAAAAAABBQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7DV09JjnaAWrhgBhi4CYYuGAzg3qQEFwoJhigJgoCUxamAYmNSAMkaTAIythgJVwsICXhJOzSUGbFpqgmM4tpIBEq1ANE5+0EHWRTEii6BnIDFRYALEgItWgJANBMXVQEFXQZxbTAEGpEwEsSNYAzDFwwBFsQCgYBpRJAIlOKH9BIzrVTAOff5RdvtEB11oTAWYSkMBTEigSFFBAADSRZAQwAA0BMFATFAEIUwEpQlAwsDARNWwBBUwBLDS0GathanFAJfOYgg7EJVUNWCA0goBYABalUAxFwChiAogAigFQwoJQhoGmpoCoaWgBqAUSgFQsS0AxEBcQ9Ig74sFURTQF1KSqBhpoBA0AqBaBqoAUppgJousgpqAGoqaC1CAAzpKCppUtBaIkgLpUZoLYl/pqagedRZPOYDvFMIopUUBdEANIAuoaaAai6AhpoCABhomgUXUApqSAIamgNWpndNLQJSM2E/QLiUpAKza1rKC8mbUigfH2J50AepWVkUVZEAXRIoFiLCghTSAaagCogAtRNBaSoloKmpKaC0TEBpEtAC1NLAKWoVBdTCpQC0ASofJQN7/6JvZBXs01k1UbEIDSIYCpV00EgICoFoBiaUCwLEAqCWg0lqSqBE9RqWgla1PUmgsTUkWxAtZaJQTU1aAhiLgJUVKKzbfZFt80B7CcSQVFW1DQX1CQgLahpaAaVAUZQGqlRAVCmgVLUtNQavElqKoRMLTQCwSoLaVCQCU0xKAlVKBpDUwVOKk7rEsAvn5GcoD1+pZUtTVRoSUgLpU00F0ZQGhLU0FLU00AS0AxKSroIaCAi6AbzCpQWolpAWoFoGEgaCala0oMli1nRVtQSgvqqLJOoDvIak4hUa0n0nI3uDUqVnVlBdE3zU0GmdJU0FqHyZ3QFxEtBcE1Aa1KlXAEWgEEwwFLxJgBL7EoYBgGgSovEloqaUthYCTzqaJxAiNz9AOqb0UEWHEChpQAxKCCFACwUBJD8KAmlAEWwAJElABQBJFsAEigCalUBNLQFJ9peQAzepOKADP8A0nXPsAH/2Q==" />
            <Card.Body>
              <Card.Title>{subject.subject_name}</Card.Title>
              
            </Card.Body>
            </Card.Link>
          </Card>
          </Col>
          )
        }
      </Row>
      </div>
    </div>
  );
}

export default Classpage;
