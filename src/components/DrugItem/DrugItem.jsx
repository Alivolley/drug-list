import React from "react";
import { Link } from "react-router-dom";
import "./DrugItem.css";

const DrugItem = ({ faName, enName, cure, drugId, forDelete, reloadData }) => {
   const deleteDrug = () => {
      fetch(`http://localhost:4000/drugs/${drugId}`, {
         method: "DELETE",
      })
         .then((res) => res.status === 200 && reloadData())
         .catch((err) => console.log(err));
   };

   return (
      <div className="drugItem">
         <div className="drugItem-right">
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">نام علمی :</label>
               <p className="drugItem-filed__answer">{enName}</p>
            </div>
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">نام دارو :</label>
               <p className="drugItem-filed__answer">{faName}</p>
            </div>
            <div className="drugItem-filed">
               <label className="drugItem-filed__label">درمان :</label>
               <p className="drugItem-filed__answer">{cure}</p>
            </div>
         </div>
         <div className="drugItem-left">
            {forDelete ? (
               <button className="drugItem-left__delete" onClick={deleteDrug}>
                  حذف دارو
               </button>
            ) : (
               <Link to={`/drug/${drugId}`} className="drugItem-btn">
                  جزئیات بیشتر
               </Link>
            )}
         </div>
      </div>
   );
};

export default DrugItem;
