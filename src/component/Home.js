import React, { useEffect } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
function Home(){

    const payload = {
        securityCode:"welcome"
      }

    //function to call server
    const getDetails=(data)=>{
        axios.post(`${base_url}/employee_tracker/api/login`,payload).then(
            (response)=>{
                console.log(response)
            },
            (error)=>{  
                console.log(error)
            }
        )
    }
    //calling url
    useEffect(()=>{
        getDetails();
    },[])

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Hello</h1>
        <p class="lead">A One-day Conference About All Things JavaScript!</p>
        <Button color="primary" outline> Start </Button>
    </div>
    );
}
export default Home;