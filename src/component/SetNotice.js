import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import DatePicker from "react-datepicker";  
import { ToastContainer,toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios"
import Moment from 'react-moment';
import moment from 'moment';
function SetNotice(){
    const token=localStorage.getItem('token')
    var startDateString=""
    var endDateString=""
    const adminId=localStorage.getItem('adminId')
    const [id, setId] = useState("2");
    const [notice, setNoticeA] = useState("Hello mice how are you?");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const getDetails=()=>{
        
          axios.post(`${base_url}/employee_tracker/api/notices`,{empId:adminId,noticeDetails:notice,startDate:startDateString,endDate:endDateString}).then(
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

    return (
        <div class="container-fluid text-sm-center p-5 bg-light"> 
        
        <h1 >Notice Board</h1>
        <form onSubmit={setDetails}>
       <div className="input-container">
         <label>Enter Your Notice Here </label>
         <textarea value={notice} onChange={(e) => handleChange(e)} />
         
       </div>
       <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      withPortal
      portalId="root-portal"
      dateFormat="yyyy/MM/dd"
    />

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
     
    </div>
    );
}
export default SetNotice;