import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from "../component/Header"
import Menus from '../component/Menus'
import MyCalendar from '../component/MyCalendar';
import NoticeBoard from '../component/NoticeBoard';
import Home from '../component/Home';

function MainPage(){

    return (
        <div>

      <ToastContainer/>
      
        </div>
        
    );
}
export default MainPage;