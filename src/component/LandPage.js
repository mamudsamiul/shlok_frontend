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

function LandPage(){
    const navigate = useNavigate();
    return (
        <div>
            <Container>
            <Header/>
        <Row>
          <Col md={12}>
          <div class="container-fluid text-sm-center p-5 bg-light"> 
            <h1 >Welcome Minions</h1>
            <p class="lead">Start Your Day</p>
            <div></div>
            <Container>
              <Row>
              
              <Col md={3}>
              </Col>
              
              <Col md={3}>
              <Link to="/login">
            <Button color="primary" outline > Employee Portal </Button>
            </Link>
                </Col>
                
              <Col md={3}>
              <Link to="/login">
            <Button color="primary" outline> Security Portal </Button>
            </Link>
                </Col>

              <Col md={3}>
              </Col>

              </Row>
            </Container>
           
            
        </div>
          </Col>
        </Row>
    
          </Container>
        </div>
        
    );
}
export default LandPage;