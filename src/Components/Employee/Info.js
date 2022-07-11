import React from "react"

import { Container,Row,Col,Form } from "react-bootstrap"
import './Info.css'


function Info(){
    return(
        <Container>
  <Row>
    <Col>
    <form action="">
    <div className="grid-container">
        <div className="grid-item">
            <div>Employee ID</div>
            <input type="text" />
            </div>
        <div className="grid-item">
            <div>Employee Name</div>
            <input type="text" />
            </div>
        <div className="grid-item">
            <div>Date of Joining</div>
            <input type="date" name="" id="" />
            </div>
        <div className="grid-item">
           <div>Date of Birth</div> 
            <input type="date" name="" id="" />
            </div>
        <div className="grid-item">
            <div>E-mail ID</div>
            <input type="text" />
            </div>
        <div className="grid-item">
            <div>Blood Group</div>
            <input type="text" />
            </div>
        <div className="grid-item">
            <div>Designation</div>
            <select name="" id=""></select>
            </div>
        <div className="grid-item">
            <div>Gender</div>
            <select name="" id=""></select>
            </div>
        <div className="grid-item">
            <div>Nationality</div>
            <select name="" id=""></select></div>
        <div className="grid-item">
            <div>Employee Status</div>
            <select name="" id=""></select></div>
    </div>
    <div className="grid-item">
        <button>Previous</button></div>
    <div className="grid-item">
        <button>Next</button></div> 
    </form>
    </Col>
  </Row>
</Container>
    )
}

export default Info


