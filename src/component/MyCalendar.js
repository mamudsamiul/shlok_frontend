import React, { useEffect ,useState} from "react"; 
import Calendar from 'react-calendar';
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-calendar/dist/Calendar.css';

function MyCalendar(){
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
        
    );
}
export default MyCalendar;