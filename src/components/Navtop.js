import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Navtop() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/login">Edu-Geek</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/batches">Batches</Nav.Link>
              <Nav.Link href="/coupons">Coupons</Nav.Link>
              <Nav.Link href="/timetable">Timetable</Nav.Link>
              
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Timetable</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <FaBell />
            <Navbar.Text>
             
              {/* <a href="#login">User</a> */}
              <NavDropdown title="User" id="basic-nav-dropdown">
             
                <NavDropdown.Item href="#action/3.1">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item 
                  onClick={() => {
                    localStorage.setItem('edugeek-authorized', 0);
                    navigate('/', {replace: true});
                  }}>
                  Logout
                </NavDropdown.Item>
              
              </NavDropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navtop;
