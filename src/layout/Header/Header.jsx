import Cookies from "js-cookie";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   let isLogin = Cookies.get("login");

   return (
      <div className="header">
         <NavLink to="/" className="header-link">
            صفحه اصلی
         </NavLink>

         {isLogin ? (
            <NavLink to="/dashboard" className="header-link">
               داشبورد
            </NavLink>
         ) : (
            <>
               <NavLink to="/signUp" className="header-link">
                  ثبت نام
               </NavLink>
               <NavLink to="/login" className="header-link">
                  ورود
               </NavLink>
            </>
         )}
      </div>
   );
};

export default Header;
