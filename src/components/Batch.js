import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getVideos } from "../apiClient/apiClient";
import AddVideoModal from "./AddVideoModal";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function Batch() {
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(async () => {
    const res = await getVideos();
    setVideos(res.data);
    console.log(res.data);
    console.log(videos);
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
                <AddVideoModal videos={videos} setVideos={setVideos}/>
              </Col>
            </Row>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px"}}>
                  {videos.map((video) => (
                    <Card style={{marginBottom:"2rem"}}>
                      <Card.Header as="h5">Class: {video.class_number}</Card.Header>
                      <Card.Body>
                        <ReactPlayer
                          config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                          url={video.video}
                          setPlaying={true}
                          controls
                          width="100%"
                          
                        
                        /> 
                      
                      <Card.Title>Title: {video.title}</Card.Title>

                        
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </div>
            </div>
          </Col>
          <Col>
            <Notif></Notif>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Batch;
