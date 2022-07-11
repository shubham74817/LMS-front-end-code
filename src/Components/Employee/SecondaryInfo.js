import React from "react";
import "./SecondaryInfo.css";
import {useNavigate} from "react-router-dom"

function SecondaryInfo() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">PAN No. </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Aadhar No.</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Father Name</div>{" "}
          <div>
           <input type="text" />
          </div>{" "}
        </div>
        <div className="div4">
          {" "}
          <div className="props">Mother Name </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div5">
          <div className="props">Spouse Name</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div6">
          {" "}
          <div className="props">Passport No. </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div7">
          {" "}
          <div className="props">Marital Status</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>
          </div>
           
        
      </form>

      <div className="footer">
        <div className="div11">
          {" "}
          <div className="props1">
            <button onClick={() => navigate(-1)}>Previous</button>
          </div>{" "}
        </div>
        <div className="div12">
          {" "}
          <div className="props2">
            <button onClick={() => navigate("/EducationDetails")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default SecondaryInfo;
