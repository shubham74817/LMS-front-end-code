import './Batch.css'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { Outlet, Link } from "react-router-dom";
function Batch(){
    return(
        
        <div className="container-div">
        <div className="batchlist"> <h5 style={{color:'#FAA81D'}}>Batch List</h5> </div>
            <div className="input" placeholder="Search" ><input type="text" /></div>
          
            <div className='table'>
            <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>No.</th>
              <th>Batch ID</th>
              <th>Batch Name</th>
              <th>Technologies</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Batch Strength</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{fontWeight:'normal'}}>
                <input type="checkbox" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>01</th>
              <th style={{fontWeight:'normal'}}>#154234653</th>
              <th style={{fontWeight:'normal'}}>abcd</th>
              
              <th style={{fontWeight:'normal'}}> </th>
              <th style={{fontWeight:'normal'}}>
                <input type="date" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>
                <input type="date" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>
                
              </th>
              <th style={{fontWeight:'normal'}}>
              <div><img id='imgexc' src="Assets\Images\imagesAdmin\OIP.jpg" alt="" /></div>
              <div className='Attendance'>Attendance</div>
              
              <Link to={"/EmployeeList"}><div className='arrow'><img src="Assets\Images\imagesAdmin\rtarrow.png" alt="" /></div></Link>
              
              
              
              </th>
            </tr>
          </tbody>
        </table>
            </div>
        </div>
       
    );
}
export default Batch;