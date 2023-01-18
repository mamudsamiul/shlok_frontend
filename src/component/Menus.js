import React from "react"; 
import { Button } from "react-bootstrap";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";
function Menus(){

    return (
            <ListGroup>
    <Link color="success" className="list-group-item list-group-item-action" tag="a" to="/main/home" action>
        Home Page
    </Link>
    <Link color="info" className="list-group-item list-group-item-action" tag="a" to="/main/calender" action>
        Past Absences/ Tradies
    </Link>
    <Link color="warning" className="list-group-item list-group-item-action" tag="a" to="/main/notice" action>
        Notice Board
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/main/calendar" action>
        Calender
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/main/beta" action>
        Apply For Leave
    </Link>
    </ListGroup>
    );
}
export default Menus;