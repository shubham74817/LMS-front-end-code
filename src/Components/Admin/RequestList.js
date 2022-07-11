import React from "react";
import './RequestList.css'


function RequestList(){
    return(
        <div className="container">
            <div className="header">
             
            <img src="Assets\Images\imagesAdmin\logo1.png" alt="logo1" />
                <div className="header1">
                    <input type="text"placeholder="Search Mentor/Employee"/>
                <button>Logout</button></div>
                
                
            </div>
            <div className=".home" style={{diplay:'flex',position:'relative',left:'11vw'}}>
              Home <img src="Assets\Images\imagesAdmin\rtarrow.png" style={{height:'9px'}} alt="cursor" /> Batch
             </div>
            <div className="aside">
                <div>
                    <img src="Assets\Images\imagesAdmin\group1.png"  alt="logo-batch" />
                   <p>Batch</p> 
                    </div>
                    <div>
                        <img src="Assets\Images\imagesAdmin\team4.png" alt="logo-mentor" />
                        <p>Mentor</p>
                    </div>
                    <div>
                        <img src="Assets\Images\imagesAdmin\add-user (2).png" alt="logo-request" />
                        <p>Request</p>
                    </div>
            </div>
            <div className="footer">
                <div className="batchlist">Request List </div>
                <div className="footerinputbtn">
                    <input type="text"  placeholder="Search"/>
                    {/* <button>+New Batch</button> */}
                </div>
                <table >
                    <thead >
                        <tr >
                            <th ><input type="checkbox" name="" id="" /></th>
                            <th>No.</th>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>YOP</th>
                            <th>Percentage</th>
                            <th>Experience</th>
                            <th>Contact No.</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        <td></td>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>01</th>
                            <th>#154234653</th>
                            <th>Aditi</th>
                            <th>2022</th>
                            <th>85%</th>
                            <th>Fresher</th>
                            <th>1234567890</th>
                            <th style={{marginLeft:'2vw'}}> 
                                <button style={{background:'#00811A80',color:'#00811A',marginLeft:'6vw',borderRadius:'23px'}}>Approve</button>
                                <button style={{background:'#B2000C80',color:'#CE000E',borderRadius:'23px',marginLeft:'1vw'}}>Reject</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestList