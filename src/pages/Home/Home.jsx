import React from "react";
import DrugItem from "../../components/DrugItem/DrugItem";
import "./Home.css";

const Home = () => {
   return (
      <div className="home">
         <DrugItem />
         <DrugItem />
         <DrugItem />
         <DrugItem />
         <DrugItem />
         <DrugItem />
      </div>
   );
};

export default Home;
