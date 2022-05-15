
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

        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<SignUp/>}/>
          <Route path="/batches" element={<Adminpage/>} />
          <Route path="/coupons" element={<Coupons/>} />
          <Route path="/timetable" element={<Timetable/>} />
  
          <Route path="/batch" element={<Batch/>} />
          <Route path="/material" element={<StudyMaterial/>} />


            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
