import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
function NoticeBoard(){
    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Notice Board</h1>
        <p class="lead">A One-day Conference About All Things JavaScript!</p>
    </div>
    );
}
export default NoticeBoard;