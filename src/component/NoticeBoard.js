import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import axios from "axios"
function NoticeBoard(){
    const token=localStorage.getItem('token')
    const [noticeDetails, setNoticeDetails] = useState([]);
    useEffect(() => {
        axios.get(`${base_url}/employee_tracker/api/notices`,
        { 
            headers: {
            "Authorization": `${token}`
        }
        })
        .then(
            (response)=>{
              console.log("response is: ")
                console.log(response.data.data)
                setNoticeDetails(response.data.data);
            },
            (error)=>{
                console.log(error)
            }
        )
        
      },[]);
    
      const listItems = noticeDetails.map(
        (element) => {
            return (
                <table className="table">
                <thead>
                <tr>
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{element.noticeDetails}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
    )

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Notice Board</h1>
        <hr/>
        <hr/>
        <p>
            {listItems}
        </p>

    </div>
    );
}
export default NoticeBoard;