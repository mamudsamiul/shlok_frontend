import React from "react"; 
import { Button } from "react-bootstrap";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";
function Menus(){

    return (
            <ListGroup>
    <Link color="success" className="list-group-item list-group-item-action" tag="a" to="/home" action>
        Home Page
    </Link>
    <Link color="info" className="list-group-item list-group-item-action" tag="a" to="/calender" action>
        Past Absences/ Tradies
    </Link>
    <Link color="warning" className="list-group-item list-group-item-action" tag="a" to="/all-user" action>
        Notice Board
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/data" action>
        Calender
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/beta" action>
        Apply For Leave
    </Link>
    </ListGroup>
    );
}
export default Menus;