import React from "react";
import { Card, CardBody } from "reactstrap";
import './Header.css'
function Header(){

    return (
        <div>
            <Card className="my-3 bg-warning" >
                <CardBody>
                <h1 className="text-center my-2">Hitech Radiators Employee Portal</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default Header;