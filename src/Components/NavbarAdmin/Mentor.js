import Formanb from './Formanb';
import './Mentor.css'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Outlet, Link } from "react-router-dom";


function Mentor(){
 
    return(
        <>
        <div className="container-div">
        <div className="batchlist"> <h5 style={{color:'#FAA81D'}}>Mentor List</h5> </div>
            <div className="input" placeholder="Search" ><input type="text" /></div>
            <div className='btn'> <Link
                  to="/newmentor"
                >
                  <button>New Mentor</button>
                </Link></div>
                <Outlet/>
            {/* <div className="btn">
              <Popup trigger={<button>+New Mentor</button>} 
     position="left">
      <div> <Formanb /> </div>
      
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
              <th>Mentor Name</th>
              <th>Employee ID</th>
              <th>Email ID</th>
              <th>Skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{fontWeight:'normal'}}>
                <input type="checkbox" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>01</th>
              <th style={{fontWeight:'normal'}}>Chandan</th>
              <th style={{fontWeight:'normal'}}></th>
              <th style={{fontWeight:'normal'}}></th>
              <th style={{fontWeight:'normal'}}>
                React Angular <br />
                Java+SpringBoot <br />
                Node & Express JS
              </th>
              <th style={{fontWeight:'normal'}}>
                <input type="date" name="" id="" />
              </th>
            </tr>
          </tbody>
        </table>
            </div>
        </div>
        </>
    );
}

export default Mentor;