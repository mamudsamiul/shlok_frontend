import React, { useEffect,useState } from "react"; 
import { Button } from "react-bootstrap";
import base_url from "../api/springapi";
import DatePicker from "react-datepicker";  
import { ToastContainer,toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios"
import Moment from 'react-moment';
import moment from 'moment';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Login.css'
function ApplyLeave(){
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('eId')
    var startDateString=""
    var endDateString=""
    const adminId=localStorage.getItem('adminId')
    const [id, setId] = useState("2");
    const [notice, setNoticeA] = useState("Replace this description with Reason");
    const [leave, setLeave] = useState("Sick Leave");
    
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
              
                if(response.data.status==200){
                    setAllLeaves(response.data.data)
                }
            },
            (error)=>{
                console.log(error)
                toast.error('Failed!!', {
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
                      setLeave("Sick Leave")
                    
                  }
              },
              (error)=>{
                  console.log(error)
                  toast.error('Failed!', {
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
      startDateString=moment(startDate).format("YYYY-MM-DD").toString()
      endDateString=moment(endDate).format("YYYY-MM-DD").toString()
      getDetails()
      
        }
    
      const handleChange = (e) => {
        e.preventDefault();
      setNoticeA(e.target.value)
        }
        const handleLeaveChange = (e) => {
            e.preventDefault();
          setLeave(e.target.value)
            }

    return (<div>
              <div class="container-fluid text-sm-center p-5 bg-light"> 
        
        <h1 >Leave Page</h1>
        <hr/>
        
        <form onSubmit={setDetails}>
        <div>
        <Container>
        <Row>
          <Col md={6}>
           <h6 className="he">Choose Your Leave Type</h6>
          </Col>
          <Col md={6}>
          <select value={leave} onChange={(e) => handleLeaveChange(e)} >
       <option value="Sick Leave">Sick Leave</option>
        <option value="Vacation Leave">Vacation Leave</option>
        <option value="Work Leave">Work Leave</option>
      </select>
          </Col>
        </Row>
        
      </Container>
        </div>
        <hr/>
        <Container>
          <Row>
            <Col md={4}>
            <h6 className="he">Description</h6>
            </Col>
            <Col md={8}>
            <div className="input-container">
         <textarea value={notice} onChange={(e) => handleChange(e)} />
       </div>
            </Col>
          </Row>
        </Container>
        <hr/>

        <Container>
          <Row>
            <Col md={6}>
            <h6 >Start Date</h6>
            </Col>
            <Col md={6}>
            <h6 >End Date</h6>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
           
       <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      withPortal
      portalId="root-portal"
      dateFormat="yyyy/MM/dd"
    />

       
            </Col>
            <Col md={6}>
            <DatePicker
placeholderText="Select End Date"
      selected={endDate}
      
      onChange={(date) => setEndDate(date)}
      withPortal
      portalId="root-portal"
      dateFormat="yyyy/MM/dd"  
    />
            </Col>
          </Row>
        </Container>
       
      <hr/>
       
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
     <div>
     </div>
    </div>
    <div className="leave">
      <div className="login-form">
        <div className="title" align>Applied Leave</div>

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
    </div>
    
    );
}
export default ApplyLeave;