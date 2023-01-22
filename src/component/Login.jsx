import React, { useRef,useEffect ,useState} from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import security_url from "../api/headerApi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Home from './Home';
import MainPage from "./MainPage";
import Header from "./Header"
import './Login.css'

import { ToastContainer,toast } from 'react-toastify';

function Login(){

  const users = [{ password: "testpassword" }];
  const navigate = useNavigate();
  const [password, setpassword] = useState("");

//function to call server
const getDetails=(e)=>{
  e.preventDefault();
    axios.post(`${base_url}/employee_tracker/api/login${security_url}`,{securityCode:password,}).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status==200){
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
              if(response.data.data.employee.admin==false){
                console.log("Employee Portal");
                
                navigate("/main",{
                  state:{
                    token: response.data.data
                  }
                });

              }
              else{
               
                console.log("Admin Portal");
                navigate("/admin");

              }
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
            navigate("/login");
        }
    )
}



const handlePassword = (e) => {
  e.preventDefault();
setpassword(e.target.value)
  }
   
  
    return (

      <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>

      <div className="form" onSubmit={getDetails}>
     <form>
       <div className="input-container">
         <label>Security Code </label>
         <input type="password" value={password} required onChange={(e) => handlePassword(e)}/>
         
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
export default Login;