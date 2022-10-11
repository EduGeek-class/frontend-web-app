import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

var phone_number;
var entered_otp = "";
var otp_number = 0;
var name="";
var dob="";
var email="";
var address="";

var file;
var password="";

function SignUp() {
  const [otp_sent, set_otp_sent] = useState(false);
  const [otp_matched, set_otp_matched] = useState(false);

  async function sendOTP(e) {
    e.preventDefault();
    otp_number = Math.floor(Math.random() * 9000 + 1000);
    console.log(otp_number);
    var response = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=qmPxwWps841RM9YD0STZlavkub2KOzX5CEgdU3oBnAQHt6firj8BRnX0FuOeZhrYkNCaq3c9EzvxTKjS&variables_values=${otp_number}&route=otp&numbers=${phone_number}`)
    console.log(response);
    set_otp_sent(true);
  }

  async function validateOTP(e) {
    e.preventDefault();
    console.log(entered_otp, otp_number, otp_matched);
    if (parseInt(entered_otp) === otp_number) {
      set_otp_matched(true);
    }
  }

  var BASE_URL='https://edugeeksbackend.pythonanywhere.com/'
  async function onSubmit(e){
    e.preventDefault()
  var response= await axios.post(BASE_URL+'/profiles/',{
    "name":name,
    "dob":dob,
    "email":email,
    "phone":parseInt(phone_number),
    "address":address,
    "image":null,
    "subscription_start_date":"2022-04-03",
    "subscription_end_date":"2022-04-03"
  })
  console.log(response);
  }
  function screen1() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Admin Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Name" />
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    onChange={(e) => {
                      phone_number = e.target.value;
                    }}
                  />
                </Form.Group>
                <br />
                <Button
                  variant="success btn-block"
                  type="submit"
                  onClick={sendOTP}
                >
                  Send OTP
                </Button>
              </Form>
            </Col>
          </Row>
          <h6 className="mt-5 p-5 text-center text-secondary ">
            Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
      </div>
    );
  }
  function screen2() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Admin Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group controlId="formBasicOTP">
                  <Form.Label> Enter OTP</Form.Label>
                  <Form.Control
                    placeholder="Enter OTP"
                    onChange={(e) => {
                      entered_otp = e.target.value;
                    }}
                  />
                </Form.Group>
                <br />

                <Button
                  variant="success btn-block"
                  type="submit"
                  onClick={validateOTP}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <h6 className="mt-5 p-5 text-center text-secondary ">
            Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
      </div>
    );
  }

  function screen3() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Admin Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group controlId="name">
                  <Form.Label> Name</Form.Label>
                  <Form.Control onChange={(e) => {
                      name = e.target.value;
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="dob">
                  <Form.Label> Date of Birth</Form.Label>
                  <Form.Control onChange={(e) => {
                      dob = e.target.value;
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="email">
                  <Form.Label> Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com"  onChange={(e) => {
                      email = e.target.value;
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Choose Image</Form.Label>
                  <Form.Control type="file" onChange={(e) => {
                      file = e.target.value;
                    }} />
                </Form.Group>
                <br />
                <Form.Group controlId="address">
                  <Form.Label> Address</Form.Label>
                  <Form.Control onChange={(e) => {
                      address = e.target.value;
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword1">
                  <Form.Label> Create Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => {
                      password = e.target.value;
                    }} />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword2">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <br />
                <Button variant="success btn-block" type="submit" onClick={onSubmit}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <h6 className="mt-5 p-5 text-center text-secondary ">
            Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
      </div>
    );
  }

  return otp_sent ? (otp_matched ? screen3() : screen2()) : screen1();
}

export default SignUp;
