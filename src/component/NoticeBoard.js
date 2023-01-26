import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
function NoticeBoard(){
    const token=localStorage.getItem('token')
    useEffect(() => {
        axios.get(`${base_url}/employee_tracker/api/notices`,
        { 
            headers: {
            "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjc0NzE1NDcwLCJleHAiOjE2NzQ3MTkwNzAsImZpcnN0TmFtZSI6IkFudXR0YW0iLCJsYXN0TmFtZSI6IkRhcyJ9.2wk5Z8ykWK11JuR_iv7a1oRCBgmzGlqPCsNS_zPpCf83cDCOpNvxZ8OT55xGcmdRyBoTm6OYmXbJs79i454kQQ"
        }
        })
        .then(
            (response)=>{
              console.log("response is: ")
                console.log(response.data)
            },
            (error)=>{
                console.log(error)
            }
        )
        
      });
          

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Notice Board</h1>
        <p class="lead">A One-day Conference About All Things JavaScript!</p>
    </div>
    );
}
export default NoticeBoard;