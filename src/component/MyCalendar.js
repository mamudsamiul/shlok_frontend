import React, { useEffect ,useState} from "react"; 
import Calendar from 'react-calendar';
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-calendar/dist/Calendar.css';
import Iframe from 'react-iframe'

function MyCalendar(){
    const [value, onChange] = useState(new Date());

    return (
        <div>
        <Iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=cGlwbzE5OTVwb3BvQGdtYWlsLmNvbQ&src=OWNjMmQ3ZTNlMzBiODhkMDAzMDY0N2Q2MGM3OTE0MDcxZWE1YjYxZTZhOGVlNDg3YzdlM2VmNDUzMDFhNTNjY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23A79B8E&color=%230B8043" style="border:solid 1px #777" width="700" height="600" frameborder="0" scrolling="yes"></Iframe>
        </div>
    );
}
export default MyCalendar;