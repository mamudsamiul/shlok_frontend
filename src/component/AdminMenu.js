import React from "react"; 
import { Button } from "react-bootstrap";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";
function AdminMenu(){

    return (
            <ListGroup>
    <Link color="success" className="list-group-item list-group-item-action" tag="a" to="admindetails" action>
        Home
    </Link>
    <Link color="info" className="list-group-item list-group-item-action" tag="a" to="search" action>
        Employee Search
    </Link>
    <Link color="warning" className="list-group-item list-group-item-action" tag="a" to="setnotice" action>
        Notice Board
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="usecalendar" action>
        Calender
    </Link>
    <Link color="danger" className="list-group-item list-group-item-action" tag="a" to="addemployee" action>
        Add Employee
    </Link>
    </ListGroup>
    );
}
export default AdminMenu;