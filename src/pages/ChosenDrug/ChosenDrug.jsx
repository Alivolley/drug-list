import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ChosenDrug.css";

const ChosenDrug = () => {
   const [chosenDrug, setChosenDrug] = useState();

   const { drugId } = useParams();

   useEffect(() => {
      fetch(`http://localhost:4000/drugs/${drugId}`)
         .then((res) => res.json())
         .then((data) => setChosenDrug(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         {chosenDrug ? (
            <div className="chosenDrug">
               <div className="chosenDrug-filed">
                  <label className="chosenDrug-filed__label">نام عملی :</label>
                  <p className="chosenDrug-filed__answer">{chosenDrug.en_name}</p>
               </div>
               <div className="chosenDrug-filed">
                  <label className="chosenDrug-filed__label">نام دارو :</label>
                  <p className="chosenDrug-filed__answer">{chosenDrug.fa_name}</p>
               </div>
               <div className="chosenDrug-filed">
                  <label className="chosenDrug-filed__label">درمان :</label>
                  <p className="chosenDrug-filed__answer">{chosenDrug.cure}</p>
               </div>
               <div className="chosenDrug-filed">
                  <label className="chosenDrug-filed__label">توضیحات:</label>
                  <p className="chosenDrug-filed__answer">{chosenDrug.describtion}</p>
               </div>
            </div>
         ) : (
            <p className="loading">Loading ...</p>
         )}
      </>
   );
};

export default ChosenDrug;
