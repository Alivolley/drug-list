import React from "react";
import "./Login.css";

const Login = () => {
   return (
      <div className="login">
         <h3 className="login-title">ورود</h3>
         <form className="login-form">
            <div className="login-filed">
               <label htmlFor="" className="login-filed__label">
                  ایمیل :
               </label>
               <input type="text" className="login-filed__input" />
            </div>
            <div className="login-filed">
               <label htmlFor="" className="login-filed__label">
                  رمز عبور :
               </label>
               <input type="text" className="login-filed__input" />
            </div>

            <button className="login-btn">ورود</button>
         </form>
      </div>
   );
};

export default Login;
