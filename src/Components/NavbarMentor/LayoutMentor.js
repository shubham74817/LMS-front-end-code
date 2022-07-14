import { Button, Menu, MenuItem } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "./LayoutMentor.css";

function LayoutMentor() {
  return (
    <div className="container-layout">
      <div className="header">
        <div className="img">
          <img
            src="Assets\Images\imagesAdmin\logo1.png"
            style={{ width: "55%" }}
            alt="logo1"
          />
        </div>
        <div className="input">
          <input type="text" placeholder="Search Mentor/Employee" />
        </div>

        <div className="avatar">
          <img src="Assets\Images\imagesAdmin\Avatar.png" alt="Avatar" />
        </div>

        <div className="userMenu">
          <select name="" id="">
            <option value="Shalini">Shalini</option>
          </select>
        </div>



        {/* <div className="btn">
          <button>Logout</button>
        </div> */}
      </div>

      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <div className="LinkDashboard">
                <img
                  src="Assets\Images\imagesAdmin\dashboard2.png"
                  alt="logo-mentor"
                />

                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p>Dashboard</p>
                </Link>
              </div>
            </li>
            <li>
              <div className="LinkBatch">
                <img
                  src="Assets\Images\imagesAdmin\group1.png"
                  alt="logo-batch"
                />

                <Link
                  to="/batch"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Batch</p>
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default LayoutMentor;
