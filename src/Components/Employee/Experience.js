import React from "react";
import "./Experience.css";
import {useNavigate} from "react-router-dom"

function Experience() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Company Name</div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props"> Years of Experience</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Date of Joining</div>{" "}
          <div>
            <input type="date" name="" id="" />
          </div>{" "}
        </div>
        <div className="div4">
          {" "}
          <div className="props">Date of Relieving </div>{" "}
          <div>
            <input type="date" name="" id="" />
          </div>
        </div>
        <div className="div5">
          <div className="props">Designation</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div6">
          {" "}
          <div className="props">Location </div>{" "}
          <div>
            <input type="text" />
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
            <button onClick={() => navigate("/Contact")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Experience;
