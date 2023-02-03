import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
function TradiesPage(){
    const token=localStorage.getItem('token')
    const [tradiesDetails, setTradiesDetails] = useState([]);
    const userId=localStorage.getItem('eId')
    useEffect(() => {
        axios.get(`${base_url}/employee_tracker/api/employee/${userId}/attendance`,
        { 
            headers: {
            "Authorization": `${token}`
        }
        })
        .then(
            (response)=>{
              console.log("response is: ")
                console.log(response.data.data)
                setTradiesDetails(response.data.data);
                console.log(tradiesDetails)
            },
            (error)=>{
                console.log(error)
            }
        )
        
      },[]);
    
      const listItems = tradiesDetails.map(
        (element) => {
            console.log("ListItems")
            console.log(tradiesDetails)
            return (
                <table className="table">
                <thead>
                <tr>
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{element.date}</td>
                        <td>{element.time}</td>
                        <td>{element.remarks}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
    )
    
    
    
    
    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Tardies Board</h1>
        <p>
        <table className="table">
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Remarks</td>
                </tr>
                </thead>
                </table>
        {listItems}
            
        </p>

    </div>
    );
}
export default TradiesPage;