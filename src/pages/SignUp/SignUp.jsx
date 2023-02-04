import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [IsExist, setIsExist] = useState(false);

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("login") && navigate("/");
   }, []);

   const submitHandler = (e) => {
      e.preventDefault();

      fetch(`http://localhost:4000/users?email=${email}`)
         .then((res) => res.status === 200 && res.json())
         .then((data) => {
            if (data.length) {
               setIsExist(true);
            } else {
               let newUser = {
                  userName,
                  email,
                  password,
                  rol: "user",
               };
               fetch("http://localhost:4000/users", {
                  headers: {
                     "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(newUser),
               })
                  .then((res) => {
                     if (res.status === 201) {
                        Cookies.set("login", "user");
                        navigate(0);
                     }
                  })
                  .catch((err) => console.log(err));
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
            {IsExist && <p className="signUp-exist">کاربری با این ایمیل موجود می باشد .</p>}
         </form>
      </div>
   );
};

export default SignUp;
