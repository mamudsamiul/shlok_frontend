import React from "react";
import { Card, CardBody } from "reactstrap";
import './Header.css'
function EmployeeHeader(){

    return (
        <div>
            <Card className="my-3" color="secondary" inverse>
                <CardBody>
                <h1 className="text-center my-2">Hitech Radiators Employee Portal</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default EmployeeHeader;