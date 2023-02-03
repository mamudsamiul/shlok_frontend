import React, { useState,useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";

import axios from "axios"
function AdminHome(props){
    const token= localStorage.getItem('token')
    const name =localStorage.getItem('adminfirstName')+ " "+localStorage.getItem('adminlastName')
    

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Hello {name} !</h1>
    </div>
    );
}
export default AdminHome;