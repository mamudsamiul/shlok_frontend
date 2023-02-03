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
import LoginPage from "./LoginPage";

function LandPage(){
    const navigate = useNavigate();
    return (
        <div>
            <Container>
            <Header/>
        <Row>
          <Col md={12}>
          <div class="container-fluid text-sm-center p-5 bg-light"> 
            <h1 >Welcome Employees</h1>
            <p class="lead"></p>
            <div></div>
            <Link to="/login" style={{ marginRight: '.9rem' }} className="btn btn-primary">Employee Portal</Link>

            <Link to="/securityadminlogin" style={{ marginLeft: '.9rem' }} className="btn btn-primary">Security Portal</Link>
          
        </div>
          </Col>
        </Row>
    
          </Container>
        </div>
        
    );
}
export default LandPage;