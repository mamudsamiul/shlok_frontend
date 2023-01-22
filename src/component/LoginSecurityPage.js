import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './Home';
import MainPage from "./MainPage";
import Header from "./Header"
import { useNavigate } from "react-router-dom";
import SecurityLogin from "./SecurityLogin";
import { ToastContainer,toast } from 'react-toastify';


function LoginSecurityPage(){
    return (
        <div>
          <ToastContainer/>
            <Container>
            <Header/>
        <Row>
          <Col md={12}>
          <SecurityLogin/>
          </Col>
        </Row>
    
          </Container>
        </div>
        
    );
}
export default LoginSecurityPage;