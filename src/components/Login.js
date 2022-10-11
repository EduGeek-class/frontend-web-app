import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getAdmin } from "../apiClient/apiClient";
import { useNavigate } from "react-router-dom";

var username = "";
var password = "";

const Login = () => {

  const [admin, setAdmin] = useState([]);

  const navigate = useNavigate();

  useEffect(async () => {
    const res = await getAdmin();
    setAdmin(res.data);
  }, [])

  const handleLogin = (event) => {
    event.preventDefault();
    admin.forEach((adm, index) => {
      console.log(adm.username)
      console.log(adm.password)
      if(adm.username === username && adm.password === password) {
        localStorage.setItem('edugeek-authorized', 1);
        navigate('/batches', {replace: true});
        window.location.reload();
        return;
      }
    })
    console.log('Login Unsuccessful')
  }

  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" onChange={(e) => {
                      username = e.target.value;
                    }}/>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => {
                      password = e.target.value;
                    }}/>
              </Form.Group>
              <br />
              <Button variant="success btn-block" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          Copyright © 2022 Edugeek. All Rights Reserved.
        </h6>
      </Container>
    </>
  );
};

export default Login;
