import React from "react";
import { Card, CardBody } from "reactstrap";
import './Header.css'
import myLogo from '../assets/logoH.png';
import { Link } from "react-router-dom";
function Header(){

    return (
        <div>
            <Card className="my-3" color="secondary" inverse>
                <CardBody>
                
                <h1 className="text-center my-2" ><Link to="/"><img src={myLogo} width="100" height="80" align="left"/></Link>Hitech Radiators Portal</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default Header;