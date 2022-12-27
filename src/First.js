import React, { useState } from "react";
import validator from 'validator'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {

const [emailError, setEmailError] = useState('')
const [emailData,setEmail] = useState()
let navigate = useNavigate()
const validateEmail = (e) => {
	var email = e.target.value
setEmail(email)
	//if (validator.isEmail(email)) {
	//setEmailError('Valid Email :)')
	//} else {
	//setEmailError('Enter valid Email!')
	//}
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
	<div style={{
	margin: 'auto',
	marginLeft: '300px',
	}}>
	<pre>
		<h2>Validating Email in ReactJS</h2>
		<span>Enter Email: </span><input type="text" id="userEmail"
		onChange={(e) => validateEmail(e)}></input> <br />
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{emailError}</span>
	</pre>
  <button onClick={onSubmitHandler}>
    Next
  </button>
 
	</div>
);
}

export default App
