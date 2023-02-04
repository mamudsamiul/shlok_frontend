import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import DatePicker from "react-datepicker";  
import { ToastContainer,toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios"
import Moment from 'react-moment';
import moment from 'moment';
import './Login.css'
function AddEmployee(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const getDetails=()=>{axios.post(`${base_url}/employee_tracker/api/employees/`,{
    firstName:firstName,
    lastName:lastName,
    email:email,
    employeeLoginManager:{
        empSecurityCode:securityCode
    }}).then(
              (response)=>{
                console.log("response is: ")
                  console.log(response)
                  
                  if(response.status==200){
                    console.log("Response is good")
                    toast.success('Success', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      });
                      setFirstName("")
                      setlastName("")
                      setEmail("")
                      setSecurityCode("")
                      
                    
                  }
              },
              (error)=>{
                  console.log(error)
                  toast.error('Login failed!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                  
              }
          )
      }

      const setDetails = (e) => {
        e.preventDefault();
      console.log(firstName)
      console.log(lastName)
      console.log(email)
      console.log(securityCode)
      getDetails()
        }
    
      const handleChange1 = (e) => {
        e.preventDefault();
      setFirstName(e.target.value)
        }
        const handleChange2 = (e) => {
            e.preventDefault();
          setlastName(e.target.value)
            }
        const handleChange3 = (e) => {
            e.preventDefault();
        setEmail(e.target.value)
            }
        const handleChange4 = (e) => {
            e.preventDefault();
        setSecurityCode(e.target.value)
            }

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <div className="app">
      <div className="login-form">
        <div className="title" align>Add Employee</div>
        <form onSubmit={setDetails}>
       <div className="input-container">
         <label>First Name </label>
         <input type="text" value={firstName} onChange={(e) => handleChange1(e)} />
         <label>Last Name</label>
         <input type="text" value={lastName} onChange={(e) => handleChange2(e)} />
         <label>Email Address</label>
         <input type="text" value={email} onChange={(e) => handleChange3(e)} />
         <label>Security Code</label>
         <input type="text" value={securityCode} onChange={(e) => handleChange4(e)} />
         
       </div>
       <div style={{alignItems:"left"}}>

       </div>
       

    
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
     </div>
     </div>
    </div>
    );
}
export default AddEmployee;