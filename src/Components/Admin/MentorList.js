import React from "react";
import './MentorList.css'


function MentorList(){
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
                <div className="batchlist">Mentor List </div>
                <div className="footerinputbtn">
                    <input type="text" />
                    <button>+New Mentor</button>
                </div>
                <table >
                    <thead >
                        <tr >
                            <th ><input type="checkbox" name="" id="" /></th>
                            <th>No.</th>
                            <th>Mentor Name</th>
                            <th>Employee Name</th>
                            <th>Email ID</th>
                            <th>Skills</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>01</td>
                            <td>Chandan</td>
                            
                            <td>React Angular <br />
                                Java+SpringBoot <br />
                                Node & Express JS
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MentorList