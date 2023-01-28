import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DrugItem from "../../components/DrugItem/DrugItem";
import "./Dashboard.css";

const Dashboard = () => {
   const [en_name, setEn_name] = useState("");
   const [fa_name, setFa_name] = useState("");
   const [cure, setCure] = useState("");
   const [describtion, setDescribtion] = useState("");
   const [drugsList, setDrugsList] = useState();
   const [isAdmin, setIsAdmin] = useState("user");

   useEffect(() => {
      getDrugsList();

      setIsAdmin(Cookies.get("login"));
   }, []);

   const getDrugsList = () => {
      fetch("http://localhost:4000/drugs?_sort=id&_order=desc")
         .then((res) => res.json())
         .then((data) => setDrugsList(data))
         .catch((err) => console.log(err));
   };

   const submitHandler = (e) => {
      e.preventDefault();

      let newDrug = {
         en_name,
         fa_name,
         cure,
         describtion,
      };

      fetch("http://localhost:4000/drugs", {
         headers: {
            "Content-Type": "application/json",
         },
         method: "POST",
         body: JSON.stringify(newDrug),
      })
         .then((res) => {
            if (res.status === 201) {
               getDrugsList();
               setEn_name("");
               setFa_name("");
               setCure("");
               setDescribtion("");
            }
         })
         .catch((err) => console.log(err));
   };

   console.log(isAdmin);

   return (
      <div className="dashboard">
         {isAdmin === "admin" ? (
            <>
               <form className="dashboard-form" onSubmit={submitHandler}>
                  <div className="dashboard-form__filed">
                     <label htmlFor="" className="dashboard-form__label">
                        نام علمی :
                     </label>
                     <input type="text" className="dashboard-form__input" value={en_name} onChange={(e) => setEn_name(e.target.value)} />
                  </div>
                  <div className="dashboard-form__filed">
                     <label htmlFor="" className="dashboard-form__label">
                        نام دارو :
                     </label>
                     <input type="text" className="dashboard-form__input" value={fa_name} onChange={(e) => setFa_name(e.target.value)} />
                  </div>
                  <div className="dashboard-form__filed">
                     <label htmlFor="" className="dashboard-form__label">
                        درمان :
                     </label>
                     <input type="text" className="dashboard-form__input" value={cure} onChange={(e) => setCure(e.target.value)} />
                  </div>
                  <div className="dashboard-form__filed">
                     <label htmlFor="" className="dashboard-form__label">
                        توضیحات بیشتر :
                     </label>
                     <textarea cols="70" rows="7" className="dashboard-form__input" value={describtion} onChange={(e) => setDescribtion(e.target.value)}></textarea>
                  </div>

                  <button className="dashboard-form__btn" disabled={fa_name && en_name && cure && describtion ? false : true}>
                     اضافه کردن دارو جدید
                  </button>
               </form>

               {drugsList ? (
                  drugsList.length ? (
                     drugsList.map((drug) => (
                        <DrugItem
                           key={drug.id}
                           faName={drug.fa_name}
                           enName={drug.en_name}
                           cure={drug.cure}
                           drugId={drug.id}
                           forDelete={true}
                           reloadData={getDrugsList}
                        />
                     ))
                  ) : (
                     <p className="noDrug">هیچ دارویی وجود ندارد </p>
                  )
               ) : (
                  <p className="loading">Loading ...</p>
               )}
            </>
         ) : (
            <p>تنها ادمین میتواند به این صفحه دسترسی داشته باشد </p>
         )}
      </div>
   );
};

export default Dashboard;
