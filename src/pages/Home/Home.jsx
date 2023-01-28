import React, { useEffect, useState } from "react";
import DrugItem from "../../components/DrugItem/DrugItem";
import "./Home.css";

const Home = () => {
   const [drugsList, setDrugsList] = useState();

   useEffect(() => {
      fetch("http://localhost:4000/drugs")
         .then((res) => res.json())
         .then((data) => setDrugsList(data))
         .catch((err) => console.log(err));
   }, []);

   console.log(drugsList);

   return (
      <div className="home">
         {drugsList ? (
            drugsList.map((drug) => <DrugItem key={drug.id} faName={drug.fa_name} enName={drug.en_name} cure={drug.cure} drugId={drug.id} />)
         ) : (
            <p className="loading">Loading ...</p>
         )}
      </div>
   );
};

export default Home;
