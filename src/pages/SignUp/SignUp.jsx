import React from "react";
import "./SignUp.css";

const SignUp = () => {
   return (
      <div className="signUp">
         <h3 className="signUp-title">فرم ثبت نام</h3>
         <form className="signUp-form">
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  نام کاربری :
               </label>
               <input type="text" className="signUp-filed__input" />
            </div>
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  رمز عبور :
               </label>
               <input type="text" className="signUp-filed__input" />
            </div>
            <div className="signUp-filed">
               <label htmlFor="" className="signUp-filed__label">
                  ایمیل :
               </label>
               <input type="text" className="signUp-filed__input" />
            </div>

            <button className="signUp-btn">ثبت نام</button>
         </form>
      </div>
   );
};

export default SignUp;
