import React from 'react'
import './App.css'
import First from './First'
import App5 from './RegistrationForm';
import Login from './login';

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function  App() {
  
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/register" element={<App5/>}/>
        <Route path="/login" element={<Login/>}/>
        
         
         
        
      </Routes>
    </BrowserRouter>
  )
}

export default  App