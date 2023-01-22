import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter as Router,Route,Routes,Outlet} from 'react-router-dom';
import AdminHeader from "../component/AdminHeader"
import Menus from '../component/Menus'
import MyCalendar from '../component/MyCalendar';
import NoticeBoard from '../component/NoticeBoard';
import Home from '../component/Home';
import AdminMenu from "./AdminMenu";

function AdminPage(){

    return (
        <div>

      <ToastContainer/>
      <Container>
        <AdminHeader/>
        <Row>
          <Col md={4}>
            <AdminMenu/>
          </Col>
          <Col md={8}>
            <Outlet/>
          </Col>
        </Row>
      </Container>

        </div>
        
    );
}
export default AdminPage;