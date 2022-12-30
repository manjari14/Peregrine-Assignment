import React, { useState } from "react";
import validator from 'validator'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css'

const App = () => {

const [emailError, setEmailError] = useState('')
const [emailData,setEmail] = useState()
let navigate = useNavigate()
const validateEmail = (e) => {
	var email = e.target.value
setEmail(email)
	
}

 const onSubmitHandler = (e) => {
  e.preventDefault();
  axios
    .post("https://admin.housen.ca/api/v1/services/duplicateEmail", {
    "email": emailData,
   
   })
     .then((response) => {
    
    if (response.data ===1) {
      setEmailError('') 
      localStorage.setItem('userEmail', emailData);  
       navigate('/register')  
   
       
        
       
    }else{
      setEmailError(response.data.email.toString()) 
    }
});
  
}

return (
  <div>
  <div className="container">
    <img className="title" src="https://housen.ca/_next/static/media/Housen.ca.ce7c102b.png" alt=""/>
    <h2 className="sign">Sign in</h2>
    <b>Your free account includes:</b>
    <div className="body">
    <li>Instant Access to All Photos, Virtual Tours, & More!</li>
    <li>Full Access to <span className="inline">Listing Sold History </span>(GTA) & Details</li>
    <li>Save Homes & Searches, Add Listing/Community Watch Alerts</li>
    </div>
    </div>
  <div>
	<pre>
		
		<span className="email">Enter Email: </span><input type="text" id="userEmail"
		onChange={(e) => validateEmail(e)}></input> <br />
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{emailError}</span>
	</pre>
  
  <button className="button" onClick={onSubmitHandler}>
    Sign-In
  </button>
  
  </div>
  </div>
);

  
  
	

  }

export default App
