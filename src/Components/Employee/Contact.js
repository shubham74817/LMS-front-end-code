import React from "react";
import "./Contact.css";
import {useNavigate} from "react-router-dom"

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="props">Contact Type </div>{" "}
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Contact No.</div>{" "}
          <div>
            <input type="text" />
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
            <button onClick={() => navigate("/SecondaryInfo")}>Next</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
