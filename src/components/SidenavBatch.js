import React from "react";
import Adminpage from "./Adminpage";
import Timetable from "./Timetable";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { BrowserRouter ,Route} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom"
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Sidenav(code) {
  console.log(code)
  return (
    <div>
      
         

      <Col style={{paddingLeft:"20px"}}>
        
   <Link style={{textDecoration:"none",color:"white"}} to={"/getbatch/" + code.code} > <Button >Batch Info</Button></Link>   </Col>
  
    </div>
  );
}

export default Sidenav;
