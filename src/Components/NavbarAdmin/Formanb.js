import React from "react";
import './Formanb.css';

function Formanb(){
    return(
        <div className="form">
            <form action="">
            <h4>Add new mentor</h4><hr />
            <div>
                <p>Mentor Name</p>
                <input type="text" />
            </div>

            <div>
                <p>Employee ID</p>
                <input type="text" />
            </div>

            <div>
                <p>Email ID</p>
                <input type="text" />
            </div>

            <div>
                <p>Skills</p>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>

           
            <hr />
            <div>
                <button>create</button>
            </div>

            


        </form>
        </div>
        
        


    )
}

export default Formanb