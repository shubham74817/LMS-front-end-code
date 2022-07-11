import React from "react";
import "./LoginForm.css";

function LoginForm() {
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
                <input type="text" />
              </div>

              <div>
                <p>Password</p>
                <input type="text" placeholder=" Enter password" />
              </div>
              <br />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
