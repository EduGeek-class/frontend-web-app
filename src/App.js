
import './App.css';
import Adminpage from './components/Adminpage';
import Navtop from './components/Navtop';
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timetable from './components/Timetable';
import Batch from './components/Batch';
import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Coupons from './components/Coupons';
import StudyMaterial from './components/StudyMaterial';
import PdfViewer from './components/PdfViewer';
import Notif from './components/Notif'
import Students from './components/Students';
function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navtop/>
      {/* <Adminpage/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/batches" element={localStorage.getItem("edugeek-authorized") === "1" ? <Adminpage/> : <Login/>} />
          <Route path="/coupons" element={localStorage.getItem("edugeek-authorized") === "1" ? <Coupons/> : <Login/>} />
          <Route path="/timetable" element={localStorage.getItem("edugeek-authorized") === "1" ? <Timetable/> : <Login/>} />
          <Route path="/notif" element={localStorage.getItem("edugeek-authorized") === "1" ? <Notif/> : <Login/>}/>
          <Route path="/video" element={localStorage.getItem("edugeek-authorized") === "1" ? <Batch/> : <Login/>} />
          <Route path="/material" element={localStorage.getItem("edugeek-authorized") === "1" ? <StudyMaterial/> : <Login/>} />
          <Route path="/materialstudy" element={localStorage.getItem("edugeek-authorized") === "1" ? <PdfViewer/> : <Login/>} />
          <Route path="/profiles" element={localStorage.getItem("edugeek-authorized") === "1" ? <Students/> : <Login/>}/>


            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
