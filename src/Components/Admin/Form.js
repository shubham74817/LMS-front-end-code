import React from "react";
import './Form.css';

function Form(){
    return(
        <div className="form">
            <form action="">
            <h4>Add new batch</h4><hr />
            <div>
                <p>Batch Name</p>
                <input type="text" />
            </div>

            <div>
                <p>Mentor Name</p>
                <input type="text" />
            </div>

            <div>
                <p>Technologies</p>
                <input type="text" />
            </div>

            <div>
                <p>Start Date</p>
                <input type="date" name="" id="" />
            </div>

            <div>
                <p>End Date</p>
                <input type="date" name="" id="" />
            </div>
            <hr />
            <div>
                <button>create</button>
            </div>

            


        </form>
        </div>
        
        


    )
}

export default Form