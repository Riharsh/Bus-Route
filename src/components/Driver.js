import React, { useState } from "react";
import "./css/Driver.css";
import Footbar from "./Footbar";
import Nav from "./Nav";
// import "./College.css";
import axios from 'axios';



const data = [
    {sno: "1", drivername: "Driver XYZ",}
]

function Driver(){
    const [firstName , setfirstName] = useState('');
    const [lastName , setlastName] = useState('');
    const[ userName , setuserName] = useState('');
    const [email , setEmail] = useState('');
    const [code , setCode] = useState('');
    const [phoneno , setPhoneNo] = useState('');

    const handleFirstChange =(e)=>{
        setfirstName(e.target.value);
      }
    const handleLastChange =(e)=>{
        setlastName(e.target.value);
      }
    const handleUserChange =(e)=>{
        setuserName(e.target.value);
      }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
      
    const handleCodeChange =(e)=>{
        setCode(e.target.value);
      }
    
    const handlePhoneNoChange = (e) =>{
        setPhoneNo(e.target.value);
      }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let formdata = new FormData();    //formdata object
        formdata.append("firstname", firstName); 
        formdata.append("lastname", lastName);  
        formdata.append("contactnumber", phoneno); 
        formdata.append("email", email); 
        formdata.append("username", userName);
        formdata.append("code", code);
        axios.post("http://127.0.0.1:5000/driver", formdata).then(response => {
           console.log(response); 
         })
        .catch(error => {
          console.log(error.response.data);
        });
    }

    return(
        <div>
        <Nav/>
            <div>
                <div className="box">
                    <div className="driver-box">
                        <div className="color-box"></div>
                        <h1 className="driver-text">Find Driver</h1>
                        <div className="campus-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        <Footbar/>
        </div>
    )
}
export default Driver;