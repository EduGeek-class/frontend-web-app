// import React from 'react';
// import Cal from './Cal';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import Form from "react-bootstrap/Form";
import { FaFilter } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
function Timetable() {
  return (
    <div>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col>
            <p>
              Filter Events <FaFilter />
            </p>
            <Form>
              <Form.Check type="checkbox" id="custom-switch" label="Classes" />
              <Form.Check type="checkbox" id="custom-switch" label="Tests" />
              <Form.Check type="checkbox" id="custom-switch" label="Events" />
            </Form>
          </Col>
          <Col xs={6}>
            <h2>Events (0)</h2>
            <div style={{textAlign:"center",justifyContent:"center",marginTop:"30%"}}>
            <FaCalendarAlt />
            <h3>There are no events in the institute.</h3>
            <br />
            <p>
              Add the schedule to your batches or add specific events to the
              batch to notify students of the batch.
            </p>
            </div>
          </Col>
          <Col>
            {/* <Cal /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Timetable;
