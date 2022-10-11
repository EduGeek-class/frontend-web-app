import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBell } from "react-icons/fa";
import { Link, useNavigate, Router } from "react-router-dom";
function Navtop() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand  >EduGeeks</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
            <Link to="/batches" style={{textDecoration:"none",color:"black" ,paddingRight:"20px"}}>Batches</Link>
            <Link to="/coupons" style={{textDecoration:"none",color:"black"}}>Coupons</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <FaBell />
            <Navbar.Text>
             
              <Nav>
             
               
                
                <Nav.Link
                  onClick={() => {
                    localStorage.setItem('edugeek-authorized', 0);
                    navigate('/', {replace: true});
                  }}>
                  Logout
                </Nav.Link>
              
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navtop;
