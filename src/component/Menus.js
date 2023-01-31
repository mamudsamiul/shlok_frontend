import React,{ useEffect } from "react"; 
import { Button } from "react-bootstrap";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
function Menus(props){
    useEffect(() => {
        console.log("Inside Menu")
        console.log(localStorage.getItem('eId'))
        
      });

    const location = useLocation();


    return (
    <ListGroup>
    <Link color="success" className="list-group-item list-group-item-action" tag="a" to="home" action>
        Home Page
    </Link>
    <Link color="info" className="list-group-item list-group-item-action" tag="a" to="tradies" action>
        Past Absences/ Tradies
    </Link>
    <Link color="warning" className="list-group-item list-group-item-action" tag="a" to="notice" action>
        Notice Board
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="calendar" action>
        Calender
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="leave" action>
        Apply For Leave
    </Link>
    </ListGroup>
    );
}
export default Menus;