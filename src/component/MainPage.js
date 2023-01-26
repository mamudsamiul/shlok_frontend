import React, { useEffect ,useState} from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter as Router,Route,Routes,Outlet} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import EmployeeHeader from "../component/EmployeeHeader"
import Menus from '../component/Menus'
import MyCalendar from '../component/MyCalendar';
import NoticeBoard from '../component/NoticeBoard';
import Home from '../component/Home';

function MainPage(){
  
    return (
        <div>

      <ToastContainer/>
      <Container>
        <EmployeeHeader/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Outlet/>
          </Col>
        </Row>
      </Container>

        </div>
        
    );
}
export default MainPage;