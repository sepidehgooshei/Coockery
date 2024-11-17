import React, { useState } from "react";
import AsideLeft from "../../components/AsideLeft";
import CardListFood from "../CardListFood";
import { getToCookToMake } from "../../data/ToCook";
import Wheat from "../../components/property/Wheat";
import FooterRazim from "../../components/FooterRazim";
import ReviewForm from "../../components/ReviewForm";

export default function Recipe3() {
   const [open, setIsOpen] = useState(false);
   
   function handleToggle() {
      setIsOpen((prev) => !prev);
   }

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-4">
                  <div className="card shadow p-3 mb-5 bg-body rounded">
                     <AsideLeft />
                  </div>
               </div>
               <div className="col-8">
                  {getToCookToMake.length > 0 && (
                     <img
                        src={getToCookToMake[2].image}
                        alt={getToCookToMake[2].title}
                        className="img-fluid shadow p-3 mb-5 bg-body rounded"
                     />
                  )}
               </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-4">
                  <div className="card shadow p-3 mb-5 bg-body rounded">
                     <div className="card-body">
                        <CardListFood />
                     </div>
                  </div>
               </div>

               <div className="col-8">
                  <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
                     <div className="card-header d-flex justify-content-between">
                        <span onClick={handleToggle}>
                           <i
                              className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                              style={{ cursor: "pointer" }}
                           ></i>
                        </span>
                        <h3 className="mb-3">👇 👩‍🍳مواد لازم پیتزا تابه ای</h3>
                     </div>

                     {open && (
                        <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                           <p className="fs-6">نون تست : ۴ عدد</p>
                           <p className="fs-6"> سس کچاپ: ۲ قاشق غذاخوری</p>
                           <p className="fs-6">پنیر پیتزا : ۱۰۰ گرم</p>
                           <p className="fs-6"> سوسیس : ۱ عدد</p>
                           <p className="fs-6"> قارچ : ۴ عدد متوسط</p>
                           <p className="fs-6">فلفل دلمه : ۱ عدد کوچک</p>
                           <p className="fs-6">کاغذ روغنی یا روغن مایع</p>
                           <span> :نکته </span>
                           <p className="mt-1">
                              اگر شعله گاز شما خیلی کم نمیشه، کف تابه کاغذ روغنی
                              بیندازید . حتما به زمان و شعله دقت کنید 👩🏻‍🍳
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>

         <div className="container mt-4">
            <div className="row">
               <div className="col-4">
                  <Wheat />
               </div>
               <div className="col-8">
                  <div className="card shadow p-3 mb-5 bg-body rounded">
                     <div className="card-header d-flex justify-content-end">
                        <span className="fs-5 fw-normal">نظر خود را بیان کنید</span>
                     </div>
                     <div className="text-end">
                        <ReviewForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <footer>
            <div className="container">
               <div className="row bg-white">
                  <FooterRazim />
               </div>
            </div>
         </footer>
      </>
   );
}
