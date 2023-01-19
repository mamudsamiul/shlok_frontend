import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from '../component/Home';
import MainPage from "./MainPage";
import Header from "../component/Header"
import { useNavigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
function Login(){
    return (
        <div>
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your Security Code!</p>
  
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Security Code' id='formControlLg' type='password' size="lg"/>
                <Link to="/main">
                <MDBBtn outline className='mx-1 px-5' color='secondary' size='lg'>
                  Login
                </MDBBtn>
                </Link>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
      </div>
        
    );
}
export default Login;