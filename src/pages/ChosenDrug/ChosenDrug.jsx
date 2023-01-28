import React from "react";
import { useParams } from "react-router-dom";
import "./ChosenDrug.css";

const ChosenDrug = () => {
   const { drugId } = useParams();

   return (
      <div className="chosenDrug">
         <div className="chosenDrug-filed">
            <label className="chosenDrug-filed__label">نام عملی :</label>
            <p className="chosenDrug-filed__answer">lorem saz</p>
         </div>
         <div className="chosenDrug-filed">
            <label className="chosenDrug-filed__label">نام دارو :</label>
            <p className="chosenDrug-filed__answer">استامین</p>
         </div>
         <div className="chosenDrug-filed">
            <label className="chosenDrug-filed__label">درمان :</label>
            <p className="chosenDrug-filed__answer">سردرد</p>
         </div>
         <div className="chosenDrug-filed">
            <label className="chosenDrug-filed__label">توضیحات:</label>
            <p className="chosenDrug-filed__answer">
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
               لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
               شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
               کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
               و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
         </div>
      </div>
   );
};

export default ChosenDrug;
