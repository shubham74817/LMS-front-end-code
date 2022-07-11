import React from "react";
import "./TechnicalSkills.css";
import {useNavigate} from "react-router-dom"

function TechnicalSkills() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Skill Type</div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Skill Rating</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div3">
          {" "}
          <div className="props">Year of Experience(over skill)</div>{" "}
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
            <button onClick={() => navigate("/Experience")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
