import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import DatePicker from "react-datepicker";  
import { ToastContainer,toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios"
import Moment from 'react-moment';
import moment from 'moment';
function EmployeeSearch(){
    
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [tradies, setTradies] = useState([]);
    const [leave, setLeave] = useState([]);
    const getDetails=()=>{axios.get(`${base_url}/employee_tracker/api/employee/1/search/${name}`).then(
              (response)=>{
                console.log("response is: ")
                  console.log(response)
                  
                  if(response.status==200){

                        setLeave(response.data.data.Leaves)
                    
                    setTradies(response.data.data.Attendance)
                    setId(response.data.data.id)
                    console.log("Response is good")
                    
                      getDetails()
                  }
              },
              (error)=>{
                  console.log(error)
                  toast.error('Login failed!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                  
              }
          )
      }
      

      const setDetails = (e) => {
        e.preventDefault();
      console.log(name)
      getDetails()
        }
    
      const handleChange = (e) => {
        e.preventDefault();
      setName(e.target.value)
        }

        const handleLeaveChange = (e,data) => {
            e.preventDefault();
            axios.put(`${base_url}/employee_tracker/api/employee/${id}/leave`,{
                id:data,
                approvalStatus:e.target.value
            }).then(
                (response)=>{
                  console.log("response is: ")
                    console.log(response)
                    
                    if(response.status==200){
                      
                      console.log("Response is good")
                      toast.success('Success', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });

                    }
                },
                (error)=>{
                    console.log(error)
                    toast.error('Login failed!', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      });
                    
                }
            )
            }
        const listItems = tradies.map(
            (element) => {
                console.log("ListItems")
                console.log(tradies)
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
        const leaveListItems = leave.map(
            (element) => {
                if(element.approvalStatus!=="PENDING APPROVAL"){
                    return null
                }
                console.log("ListItems")
                console.log(leave)
                return (
                    <table className="table">
                    <thead>
                    <tr>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{element.startDate}</td>
                        <td>{element.endDate}</td>
                        <td>{element.type}</td>
                        <td>{element.details}</td>
                        <td>
                        <select value={leave} onChange={(e) => handleLeaveChange(e,element.id)}>
                        <option value="PENDING APPROVAL">PENDING APPROVAL</option>
                        <option value="Reject">Reject</option>
                            <option value="Approved">Approved</option>
                        </select>
                        </td>
                        </tr>
                    </tbody>
                </table>
                )
            }
        )
        

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        <h1 >Search Employee</h1>
        <form onSubmit={setDetails}>
       <div className="input-container">
         <input type="text" value={name} onChange={(e) => handleChange(e)} />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
     <hr/>
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
        <p>
        <table className="table">
                <thead>
                <tr>
                    <td>From</td>
                    <td>To</td>
                    <td>Type</td>
                    <td>Details</td>
                    <td>Status</td>
                </tr>
                </thead>
                </table>
                {leaveListItems}
            
        </p>
     
    </div>
    );
}
export default EmployeeSearch;