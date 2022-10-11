import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { getVideos } from "../apiClient/apiClient";
import AddVideoModal from "./AddVideoModal";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function Batch() {
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(false);
  const {batch_code, subject_code} = useParams();

  useEffect(async () => {
    const res = await getVideos(batch_code, subject_code);
    setVideos(res.data);
    console.log(res.data);
    console.log(videos);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Sidenav batch_code={batch_code} subject_code={subject_code} />
          </Col>
          <Col xs={6}>
            <Row>
              {/* <Col xs={6}>
                <h2>Class 10 Science</h2>
              </Col> */}
              <Col xs={6}>
                <AddVideoModal videos={videos} setVideos={setVideos}/>
              </Col>
            </Row>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px"}}>
                  
                  {videos.map((video) => (
                    
                    <Card style={{marginBottom:"2rem"}}>
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
