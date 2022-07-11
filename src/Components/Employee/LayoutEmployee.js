import { Outlet, Link } from "react-router-dom";
import "./LayoutEmployee.css";

function LayoutEmployee() {
  return (
    <div className="container-layout">
      

      <div className="Navbar">
        <nav>
          <ul>
            <li>
            <div className="PrimaryInfo">
                 <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Primary Info</p>
                  
                </Link>
              </div>
            </li>

            <li>
            <div className="SecondaryInfo">
             
             
                <Link
                  to="/SecondaryInfo"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p>Secondary Info</p>
                  
                </Link>
              </div>
            </li>
            <li>
            <div className="EducationDetails">
              
                <Link
                  to="/EducationDetails"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Education Details</p>
                 
                </Link>
              </div>
            </li>
            <li>
            <div className="AddressDetails">
                 <Link
                  to="/AddressDetails"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p>Address Details</p>
                 
                </Link>
              </div>
            </li>
            <li>
            <div className="BankDetails">
                 <Link
                  to="/BankDetails"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Bank Details</p>
                 
                </Link>
              </div>
            </li>
            <li>
            <div className="TechnicalSkills">
                 <Link
                  to="/TechnicalSkills"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p>Technical Skills</p>
                 
                </Link>
              </div>
            </li>
            <li>
            <div className="Experience">
                 <Link
                  to="Experience"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Experience</p>
                 
                </Link>
              </div>
            </li>
            <li>
            <div className="Contact">
                 <Link
                  to="/Contact"
                  style={{ textDecoration: "none", color: "#086288" }}
                >
                  <p> Contact</p>
                 
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

export default LayoutEmployee;
