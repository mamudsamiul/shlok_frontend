import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import DatePicker from "react-datepicker";  
import { ToastContainer,toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios"
import Moment from 'react-moment';
import moment from 'moment';
function ApplyLeave(){
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('eId')
    var startDateString=""
    var endDateString=""
    const adminId=localStorage.getItem('adminId')
    const [id, setId] = useState("2");
    const [notice, setNoticeA] = useState("Not feeling well?");
    const [leave, setLeave] = useState("Privilage Leave");
    
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [allLeaves, setAllLeaves] = useState([]);

    useEffect(() => {
        console.log("Inside Menu")
        console.log(localStorage.getItem('eId'))
        axios.get(`${base_url}/employee_tracker/api/employee/${userId}/leave`).then(
            (response)=>{
              console.log("Applied Leaves: ")
                console.log(response.data.data)
                
                if(response.data.status==200){
                    setAllLeaves(response.data.data)
                    
                  
                  
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
        
      });
      const listItems = allLeaves.map(
        (element) => {
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
                        <td>{element.approvalStatus}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
    )

    const getDetails=()=>{
        console.log(leave)
        
          axios.post(`${base_url}/employee_tracker/api/employee/${userId}/leave`,{startDate:startDateString,endDate:endDateString,type:leave,details:notice}).then(
              (response)=>{
                console.log("response is: ")
                  console.log(response.data)
                  
                  if(response.data.status==200){
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
                      setLeave("Privilage Leave")
                    
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
      console.log(adminId)
      console.log(notice)
      
      startDateString=moment(startDate).format("YYYY-MM-DD").toString()
      endDateString=moment(endDate).format("YYYY-MM-DD").toString()
      console.log(startDateString)
      console.log(endDateString)
      getDetails()
      
        }
    
      const handleChange = (e) => {
        e.preventDefault();
      setNoticeA(e.target.value)
        }
        const handleLeaveChange = (e) => {
            e.preventDefault();
            console.log("e value is")
            console.log(e.target.value)
          setLeave(e.target.value)
            }

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        
        <h1 >Leave Page</h1>
        
        <form onSubmit={setDetails}>
        <div>
        <label> Select Leave type</label>
        <label></label>
        <select value={leave} onChange={(e) => handleLeaveChange(e)}>
       <option value="Sick Leave">Sick Leave</option>
        <option value="Personal Leave">Personal Leave</option>
        <option value="Privilage Leave">Privilage Leave</option>
      </select>
        </div>
       <div className="input-container">
         <label>Leave Description </label>
         <textarea value={notice} onChange={(e) => handleChange(e)} />
         
       </div>
       <div style={{alignItems:"left"}}>
       <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      withPortal
      portalId="root-portal"
      dateFormat="yyyy/MM/dd"
    />

       </div>
       
<DatePicker
placeholderText="Select End Date"
      selected={endDate}
      
      onChange={(date) => setEndDate(date)}
      withPortal
      portalId="root-portal"
      dateFormat="yyyy/MM/dd"  
    />
    
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
     <div>
        <hr/>
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
     <p>
            {listItems}
        </p>
     </div>
     
    </div>
    );
}
export default ApplyLeave;