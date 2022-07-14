import React from "react";
import './AddMock.css';

function AddMock(){
    return(
        <div className="form">
            <form action="">
            <h4>Add Mock</h4><hr />
            <div>
                <p>Batch ID</p>
                <input type="text" />
            </div>

            <div>
                <p>Mock No.</p>
                <input type="text" />
            </div>

            <div>
                <p>Technology</p>
                <input type="text" />
            </div>

            <div>
                <p>Panel</p>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div>
                <p>Date & Time</p>
                <input type="datetime-local" name="" id="" />
            </div>
            

           
            <hr />
            <div>
                <button>create</button>
            </div>

            


        </form>
        </div>
        
        


    )
}

export default AddMock