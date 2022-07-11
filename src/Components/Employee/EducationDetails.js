import React from "react";
import "./PrimaryInfo.css";
import {useNavigate} from "react-router-dom"

function PrimaryInfo() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Education  </div>{" "}
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Year of Passing</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Percentage(%)</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div4">
          {" "}
          <div className="props">University Name</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="div5">
          <div className="props">Institue Name</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div6">
          {" "}
          <div className="props">Specialisation </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div7">
          {" "}
          <div className="props">State</div>{" "}
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
            <button onClick={() => navigate("/AddressDetails")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default PrimaryInfo;
