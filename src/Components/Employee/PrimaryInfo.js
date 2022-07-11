import React from "react";
import "./PrimaryInfo.css";

function PrimaryInfo() {
  return (
    <div className="container">
      <form action="">
        <div className="div1">
          {" "}
          <div className="col1">Employee ID </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div2">
          {" "}
          <div className="props">Employee Name</div>{" "}
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
          <div className="props">Date of Birth </div>{" "}
          <div>
            <input type="date" name="" id="" />
          </div>
        </div>
        <div className="div5">
          <div className="props">E-mail ID</div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
        </div>
        <div className="div6">
          {" "}
          <div className="props">Blood Group </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="div7">
          {" "}
          <div className="props">Designation</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div8">
          {" "}
          <div className="props">Gender</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div9">
          {" "}
          <div className="props">Nationality</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
        <div className="div10">
          {" "}
          <div className="props">Employee Status</div>{" "}
          <div>
            <select name="" id=""></select>
          </div>{" "}
        </div>
      </form>
    </div>
  );
}

export default PrimaryInfo;
