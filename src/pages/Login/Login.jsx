import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("login") && navigate("/");
   }, []);

   const submitHandler = (e) => {
      e.preventDefault();

      fetch(`http://localhost:4000/users?email=${email}&password=${password}`)
         .then((res) => res.status === 200 && res.json())
         .then((data) => {
            if (data.length) {
               Cookies.set("login", data[0].rol);
               navigate(0);
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="login">
         <h3 className="login-title">ورود</h3>
         <form className="login-form" onSubmit={submitHandler}>
            <div className="login-filed">
               <label htmlFor="" className="login-filed__label">
                  ایمیل :
               </label>
               <input type="text" className="login-filed__input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login-filed">
               <label htmlFor="" className="login-filed__label">
                  رمز عبور :
               </label>
               <input type="text" className="login-filed__input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="login-btn" disabled={email && password ? false : true}>
               ورود
            </button>
         </form>
      </div>
   );
};

export default Login;
