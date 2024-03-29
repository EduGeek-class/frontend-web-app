import React from "react";
import Adminpage from "./Adminpage";
import Timetable from "./Timetable";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { BrowserRouter ,Route} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom"
function Sidenav(code) {
  console.log(code)
  return (
    <div>
      
         

      <ListGroup style={{fontSize:"20px",color:"3B8854"}} >
        
    <ListGroup.Item><Link style={{textDecoration:"none"}} to={"/video/" + code.batch_code + "/" + code.subject_code}>Video</Link></ListGroup.Item>
    <ListGroup.Item><Link style={{textDecoration:"none"}} to={"/material/" + code.batch_code + "/" + code.subject_code} >Study Material</Link></ListGroup.Item>
    <ListGroup.Item><Link style={{textDecoration:"none"}} to={"/profiles/" + code.batch_code + "/" + code.subject_code}> Students</Link></ListGroup.Item>
    
    
   
  </ListGroup>
    </div>
  );
}

export default Sidenav;
