import React from "react";
import { Link } from "react-router-dom";
import "./DrugItem.css";

const DrugItem = () => {
   return (
      <div className="drugItem">
         <div className="drugItem-right">
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">نام عملی :</label>
               <p className="drugItem-filed__answer">lorem saz</p>
            </div>
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">نام دارو :</label>
               <p className="drugItem-filed__answer">استامین</p>
            </div>
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">درمان :</label>
               <p className="drugItem-filed__answer">سردرد</p>
            </div>
         </div>
         <div className="drugItem-left">
            <Link to="/drug/1" className="drugItem-btn">
               جزئیات بیشتر
            </Link>
         </div>
      </div>
   );
};

export default DrugItem;
