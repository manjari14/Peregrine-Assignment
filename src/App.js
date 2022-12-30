import React from 'react'
import './App.css'
import First from './First'
import App5 from './RegistrationForm';
import Login from './login';

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import App6 from './Sign';


function  App() {
 
  
  return(
    <div>
   
  <BrowserRouter>
      <Routes>

        <Route path="/" element={<App6/>}/>
        <Route path="/register" element={<App5/>}/>
        <Route path="/login" element={<Login/>}/>
        
        
         
         
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default  App