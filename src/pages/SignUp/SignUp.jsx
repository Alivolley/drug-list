import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("login") && navigate("/");
   }, []);

   const submitHandler = (e) => {
      e.preventDefault();

      let newUser = {
         userName,
         email,
         password,
         rol: "user",
      };

      console.log(JSON.stringify(newUser));

      fetch("http://localhost:4000/users", {
         headers: {
            "Content-Type": "application/json",
         },
         method: "POST",
         body: JSON.stringify(newUser),
      })
         .then((res) => {
            if (res.status === 201) {
               Cookies.set("login", true);
               navigate(0);
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="signUp">
         <h3 className="signUp-title">فرم ثبت نام</h3>
         <form className="signUp-form" onSubmit={submitHandler}>
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  نام کاربری :
               </label>
               <input type="text" className="signUp-filed__input" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  ایمیل :
               </label>
               <input type="text" className="signUp-filed__input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  رمز عبور :
               </label>
               <input type="text" className="signUp-filed__input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="signUp-btn" disabled={userName && email && password ? false : true}>
               ثبت نام
            </button>
         </form>
      </div>
   );
};

export default SignUp;
