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
import Login from "./Login";

function LoginPage(){
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate("/dashboard");
        };
    return (
        <div>
            <Container>
            <Header/>
        <Row>
          <Col md={12}>
          <Login/>
          </Col>
        </Row>
    
          </Container>
        </div>
        
    );
}
export default LoginPage;