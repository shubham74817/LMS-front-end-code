import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="container-layout">
      <div className="header">
        <div className="img">
        <img src="Assets\Images\imagesAdmin\logo1.png" style={{width:'55%'}} alt="logo1" />
        </div>
        <div className="input">
        <input type="text" placeholder="Search Mentor/Employee" />
        </div>
        <div className="btn">
        <button >Logout</button>
        </div>
      </div>

      <div className="Navbar">
        <nav>
          <ul>
            <li>
            <div className="LinkBatch">
              <img
                src="Assets\Images\imagesAdmin\group1.png"
                alt="logo-batch"
              />
              
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Batch</p>
                 
                </Link>
              </div>
            </li>

            <li>
            <div className="LinkMentor">
              <img
                src="Assets\Images\imagesAdmin\team4.png"
                alt="logo-mentor"
              />
             
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p>Mentor</p>
                  
                </Link>
              </div>
            </li>
            <li>
            <div className="LinkRequest">
              <img
                src="Assets\Images\imagesAdmin\add-user (2).png"
                alt="logo-request"
              />
              
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Request</p>
                 
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

export default Layout;
