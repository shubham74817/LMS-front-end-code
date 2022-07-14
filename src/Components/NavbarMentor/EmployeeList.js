import "./Batch.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import Dropdown from 'react-bootstrap/Dropdown;

import { Outlet, Link } from "react-router-dom";
function Batch() {
  return (
    <div className="container-div">
      <div className="batchlist">
        {" "}
        <h6 style={{ color: "#FAA81D" }}>Employee List(Batch ID)</h6>{" "}
      </div>
      <div className="input" placeholder="Search">
        <input type="text" />
      </div>
      <div>
       
      </div>
      {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Download
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

      <div className="btn">
        {" "}
        <Link to="/AddMock">
          <button>Create Mock</button>
        </Link>
      </div>
      <Outlet />

      <div className="table">
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
              <th style={{ fontWeight: "normal" }}>
                <input type="checkbox" name="" id="" />
              </th>
              <th style={{ fontWeight: "normal" }}>01</th>
              <th style={{ fontWeight: "normal" }}>#154234653</th>
              <th style={{ fontWeight: "normal" }}>abcd</th>

              <th style={{ fontWeight: "normal" }}> </th>
              <th style={{ fontWeight: "normal" }}>
                <input type="date" name="" id="" />
              </th>
              <th style={{ fontWeight: "normal" }}>
                <input type="date" name="" id="" />
              </th>
              <th style={{ fontWeight: "normal" }}></th>
              <th style={{ fontWeight: "normal" }}>
                <div>
                  <img
                    id="imgexc"
                    src="Assets\Images\imagesAdmin\OIP.jpg"
                    alt=""
                  />
                </div>
                <div className="Attendance">Attendance</div>

                <Link to={"/EmployeeList"}>
                  <div className="arrow">
                    <img src="Assets\Images\imagesAdmin\rtarrow.png" alt="" />
                  </div>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Batch;
