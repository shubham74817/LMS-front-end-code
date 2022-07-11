import React from "react";
import "./BankDetails.css";
import {useNavigate} from "react-router-dom"

function BankDetails() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Account No. </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Bank Name</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Account Type</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div4">
          {" "}
          <div className="props">IFSC Code </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div5">
          <div className="props">Branch</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div6">
          {" "}
          <div className="props">State </div>{" "}
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
            <button onClick={() => navigate("/TechnicalSkills")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
