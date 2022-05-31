import React from "react";
import Adminpage from "./Adminpage";
import Timetable from "./Timetable";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { BrowserRouter ,Route} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom"
function Sidenav() {
  return (
    <div>
      
         

      <ListGroup style={{fontSize:"20px",color:"3B8854"}} >
    <ListGroup.Item><Link style={{textDecoration:"none"}} to="/batch">Video</Link></ListGroup.Item>
    <ListGroup.Item><Link style={{textDecoration:"none"}} to="/material">Study Material</Link></ListGroup.Item>
    <ListGroup.Item><Link style={{textDecoration:"none"}} to="/profiles">Students</Link></ListGroup.Item>
    
    
   
  </ListGroup>
    </div>
  );
}

export default Sidenav;
