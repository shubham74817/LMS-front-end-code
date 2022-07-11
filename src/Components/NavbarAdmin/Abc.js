// import './Batch.css'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from './Form'; 
import './Form.css';

function Abc(){
    return(<Popup trigger={<button style={{marginLeft:'20vw',marginTop:'20vh'}}>+New Batch</button>} 
    position="center ">
     <div> <Form /> </div>
     
    </Popup>)

}
export default Abc;