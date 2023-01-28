import React, { useEffect, useState } from "react";
import DrugItem from "../../components/DrugItem/DrugItem";
import "./Home.css";

const Home = () => {
   const [drugsList, setDrugsList] = useState();

   useEffect(() => {
      fetch("http://localhost:4000/drugs?_sort=id&_order=desc")
         .then((res) => res.json())
         .then((data) => setDrugsList(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="home">
         <h2 className="home-title">لیست دارو ها</h2>
         {drugsList ? (
            drugsList.length ? (
               drugsList.map((drug) => <DrugItem key={drug.id} faName={drug.fa_name} enName={drug.en_name} cure={drug.cure} drugId={drug.id} />)
            ) : (
               <p className="noDrug">هیچ دارویی وجود ندارد </p>
            )
         ) : (
            <p className="loading">Loading ...</p>
         )}
      </div>
   );
};

export default Home;
