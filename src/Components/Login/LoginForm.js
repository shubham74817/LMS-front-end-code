import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [id, setId] = useState();
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleLogin() {
    console.log(id);
    console.log(password);
    if (id === 123456 && password === "password") {
      return <div>You are welcome!</div>;
    }else{
      return <div>Employee ID or password is not matching.</div>;
    }
    
  }

  return (
    <div className="container">
      <div className="bgblrimg">
        {/* <img
        //   src="Assets\Images\imagesAdmin\Login – 1\blurimage.png"
          alt="bgblrimg"
        /> */}
      </div>

      <div className="form-img-bgclrimg">
        <div className="bgclrimg">
          <img
            src="Assets\Images\imagesAdmin\Login – 1\clearimg.png"
            alt="bgclrimg"
          />
        </div>
        <div className="img-form">
          <div className="img">
            <img
              src="Assets\Images\imagesAdmin\Login – 1\logo-login.png"
              alt=""
            />
          </div>
          <div className="form">
            <form action="">
              <h2>Login</h2>
              <div>
                <p>Employee ID</p>
                <label htmlFor="EmployeeID"></label>
                <input type="text" id="EmployeeID" placeholder="" onChange={()=>handleChangeId} />
                
              </div>

              <div>
                <p>Password</p>
                <label htmlFor="password"></label>
                <input
                  type="text"
                  id="password"
                  placeholder=" Enter password"
                  onChange={()=>handleChangePassword}
                />
              </div>
              <br />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
