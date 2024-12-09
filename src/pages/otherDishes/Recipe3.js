import React, { useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import Wheat from "../../components/property/Wheat";
import { useEffect } from "react";


export default function Recipe3() {
   const [riceFoodItem,setRiceFoodItem] = useState(null);
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState(null);
   const [open, setIsOpen] = useState(false);
   
   useEffect(()=>{
      async function fetchCookFoods(){
         try{
            const response = await fetch("http://localhost:9000/getToCookToMake");
       if(!response.ok){
         throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRiceFoodItem(data[2]);
         }catch(error){
setError(error.message)
         }finally{
setLoading(false)
         }
      }
      fetchCookFoods()
   },[])
   function handleToggle() {
      setIsOpen((prev) => !prev);
   }
   if (loading) {
      return <div className="text-center mt-5">در حال بارگذاری...</div>;
    }
   if (error) {
      return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
    }
   return (
      <>
         <div className="container">
         {riceFoodItem && (
                    <div className="text-end fw-light p-3">
                         <h3 className="fw-normal">{riceFoodItem.name}</h3>
                        <div className="mt-2">
                        <span>{riceFoodItem.national}</span>
<span >  <i class="fa-solid fa-location-dot text-muted"></i> </span>
                        </div>
                    </div>
                )}
           
            <div className="row">
               <div className="col-4">
                  <div className="card shadow p-3 mb-5 bg-body rounded">
                     <AsideLeft />
                  </div>
               </div>
               <div className="col-8">
                  {riceFoodItem && (
                     <img
                        src={riceFoodItem.image}
                        alt={riceFoodItem.title}
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
