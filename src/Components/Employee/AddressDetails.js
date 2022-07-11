import React from "react";
import "./AddressDetails.css";
import {useNavigate} from "react-router-dom"

function AddressDetails() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Address Type </div>{" "}
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Door No.</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Street</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div4">
          {" "}
          <div className="props">Locality </div>{" "}
          <div>
           <input type="text" />
          </div>
        </div>
        <div className="div5">
          <div className="props">City</div>{" "}
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
        <div className="div7">
          {" "}
          <div className="props">Pin Code</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div8">
          {" "}
          <div className="props">Landmark</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
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
            <button onClick={() => navigate("/BankDetails")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default AddressDetails;
