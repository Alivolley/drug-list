import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <NavLink to="/" className="header-link">
            صفحه اصلی
         </NavLink>
         <NavLink to="/signup" className="header-link">
            ثبت نام
         </NavLink>
         <NavLink to="/login" className="header-link">
            ورود
         </NavLink>
      </div>
   );
};

export default Header;
