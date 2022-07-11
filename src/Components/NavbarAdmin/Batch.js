import './Batch.css'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from './Form'; 
import './Form.css';
import { Outlet, Link } from "react-router-dom";
function Batch(){
    return(
        
        <div className="container-div">
        <div className="batchlist"> <h5 style={{color:'#FAA81D'}}>Batch List</h5> </div>
            <div className="input" placeholder="Search" ><input type="text" /></div>
            <div className='btn'> <Link
                  to="/newbatch"
                >
                  <button>New Batch</button>
                </Link></div>
                <Outlet/>
            
           


            {/* <button>+New Batch</button> */}
            {/* <div className="btn">
              <Popup trigger={<button>+New Batch</button>} 
     position="left">
      <div> <Form /> </div>
      
    </Popup>
              </div> */}
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
              <th>Mentor Name</th>
              <th>Technologies</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
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
              <th style={{fontWeight:'normal'}}>Chandan</th>
              <th style={{fontWeight:'normal',backgroundColor:'#086288'}}>
               <div style={{backgroundColor:'#086288'}}> React Angular</div>  <br />
               <div style={{backgroundColor:'#086288'}}>Java+SpringBoot</div>  <br />
                <div style={{backgroundColor:'#086288'}}>Node & Express JS</div>
              </th>
              <th style={{fontWeight:'normal'}}>
                <input type="date" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>
                <input type="date" name="" id="" />
              </th>
            </tr>
          </tbody>
        </table>
            </div>
        </div>
       
    );
}
export default Batch;