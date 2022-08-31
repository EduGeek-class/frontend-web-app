import React from "react"
import { patchBatchesSingle, getBatchesSingle } from "../apiClient/apiClient"
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'


function BatchInfo() {
  const { batch_code } = useParams()
  const [batchesinfo, setBatchesInfo] = useState([])
  const [code, setBatchCode] = useState([])
  const [batch_name, setBatchName] = useState([])
  const [batch_desc, setBatchDesc] = useState([])
  const [batch_price, setBatchPrice] = useState([])
  const [batch_val, setBatchVal] = useState([])
  const [batch_img, setBatchImg] = useState([])

  const patchCourseName = async (event) => {
    event.preventDefault()
    var res = patchBatchesSingle("course_name", batch_name, batch_code)
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Course Name updated successfully',
    })
    
  }

  const patchDescription = async (event) => {
    event.preventDefault()
    var res = patchBatchesSingle("description", batch_desc, batch_code)
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Description updated successfully',
    })
    
  }

  const patchCourseValidity = async (event) => {
    event.preventDefault()
    var res = patchBatchesSingle("course_validity", batch_val, batch_code)
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Course Validity updated successfully',
    })
    
  }

  const patchPrice = async (event) => {
    event.preventDefault()
    var res = patchBatchesSingle("price", batch_price, batch_code)
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: 'Price updated successfully',
    })
    
  }

  useEffect(async () => {
    const res = await getBatchesSingle(batch_code)
    console.log(res)
    setBatchName(res.data.course_name)
    setBatchDesc(res.data.description)
    setBatchVal(res.data.course_validity)
    setBatchPrice(res.data.price)
    // setBatchesInfo(res.data)
    // console.log(res.data)
    // console.log(batchesinfo)
  }, [])

  return (
    <div style={{ padding: " 40px", fontSize: "20px" }}>
      {/* <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Name</Form.Label>
              <Form.Control type="text" placeholder="Eg: Class 1 Maths" value={batch_name} onChange={(e) => {
                     setBatchName(e.target.value)
                    }}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
            </Form>
            <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Eg. Organic Chemistry" onChange={(e) => {
                      setBatchDesc( e.target.value)
                    }}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
           </Form>
           <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Batch Code</Form.Label>
              <Form.Control type="text" placeholder="Ex: 220103" onChange={(e) => {
                      setBatchCode( e.target.value)
                    }}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
            </Form>
            <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Course Validity</Form.Label>
            <Form.Control type="date/time" placeholder="Ex: 2020-01-12" onChange={(e) => {
                      setBatchVal( e.target.value)
                    }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
            </Form>
            <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ex: 10000" onChange={(e) => {
                      setBatchPrice( e.target.value)
                    }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
                    </Form> */}
      <Form onSubmit={patchCourseName}>
        <Row style={{ padding: "10px 40px" }}>
          <h4>Batch Details</h4>

          <br></br>

          <Col>Course Name</Col>

          <Col>
            <input type="text" defaultValue={batchesinfo.course_name} value={batch_name} onChange={(e) => {
                     setBatchName(e.target.value)
                    }}></input>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
      <Form onSubmit={patchDescription}>
        <Row style={{ padding: "10px 40px" }}>
          <Col>Description</Col>
          <Col>
            <input type="text" defaultValue={batchesinfo.description} value={batch_desc} onChange={(e) => {
                     setBatchDesc(e.target.value)
                    }}></input>
          </Col>

          <Col>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
      {/* <Row style={{ padding: "10px 40px" }}>
        <Col>Batch Code</Col>
        <Col>
          <input type="text" defaultValue={batchesinfo.batch_code}></input>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row> */}
      <Form onSubmit={patchCourseValidity}>
        <Row style={{ padding: "10px 40px" }}>
          <Col>Course Validity</Col>
          <Col>
            <input type="text" defaultValue={batchesinfo.course_validity} value={batch_val} onChange={(e) => {
                     setBatchVal(e.target.value)
                    }}></input>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
      <Form onSubmit={patchPrice}>
        <Row style={{ padding: "10px 40px" }}>
          <Col>Price</Col>
          <Col>
            <input type="text" defaultValue={batchesinfo.price} value={batch_price} onChange={(e) => {
                     setBatchPrice(e.target.value)
                    }}></input>
          </Col>

          <Col>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col></Col>
      </Row>
    </div>
  )
}

export default BatchInfo
