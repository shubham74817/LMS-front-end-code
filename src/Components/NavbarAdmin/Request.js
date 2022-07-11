import './Request.css'
import { Outlet, Link } from "react-router-dom";

function Request(){
    return(
        <div>
        <div className="container-div">
        <div className="batchlist"> <h5 style={{color:'#FAA81D'}}>Request List</h5> </div>
            <div className="input" placeholder="Search" ><input type="text" /></div>
            <div className='table'>
            <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
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
            <tr>
              <th style={{fontWeight:'normal'}}>
                <input type="checkbox" name="" id="" />
              </th>
              <th style={{fontWeight:'normal'}}>01</th>
              <th style={{fontWeight:'normal'}}>#154234653</th>
              <th style={{fontWeight:'normal'}}>Aditi</th>
              <th style={{fontWeight:'normal'}}>2022</th>
              <th style={{fontWeight:'normal'}}>85%</th>
              <th style={{fontWeight:'normal'}}>Fresher</th>
              <th style={{fontWeight:'normal'}}>1234567890</th>
              <th style={{fontWeight:'normal'}}> 
              <div className='btna'> <Link
                  to="/approve"
                >
                  <button>Approve</button>
                </Link></div>
                <div className='btnr'> <Link
                  to="/reject"
                >
                  <button>Reject</button>
                </Link></div>
                <Outlet/>
                {/* <Outlet/> */}
               
              </th>
            </tr>
          </tbody>
        </table>
            </div>
        </div>
        </div>
    );
}
export default Request;