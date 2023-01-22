import React from "react"; 
import { Button } from "react-bootstrap";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";
function AdminMenu(){

    return (
            <ListGroup>
    <Link color="success" className="list-group-item list-group-item-action" tag="a" to="/home" action>
        Details
    </Link>
    <Link color="info" className="list-group-item list-group-item-action" tag="a" to="/calender" action>
        Employee Search
    </Link>
    <Link color="warning" className="list-group-item list-group-item-action" tag="a" to="/all-user" action>
        Notice Board
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/data" action>
        Calender
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="/beta" action>
        Leave Application
    </Link>
    </ListGroup>
    );
}
export default AdminMenu;