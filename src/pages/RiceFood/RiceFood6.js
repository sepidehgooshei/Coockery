import { useState } from "react";
import { RiceMeat } from "../../data/RiceFood.js";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import RedBarberry from "../../components/property/RedBarberry.js";
 
export default function RiceFood6() {
    const[open,setOpen] = useState(false)
    const riceMeatItem = RiceMeat.length > 5 ? RiceMeat[5] : null;

   function handleToggle(){
    setOpen((prev)=>!prev)
   }
    return(
        <>
         <div className="container">
            
         {riceMeatItem && (
                    <div className="text-end fw-light p-3">
                         <h3 className="fw-normal">{riceMeatItem.name}</h3>
                        <div className="mt-2">
                        <span>{riceMeatItem.national}</span>
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
                {RiceMeat.length > 0 && (
                   <img 
                   src={RiceMeat[5].image}
                   alt={RiceMeat[5].title}
                   className="img-fluid shadow p-3 mb-5 bg-body rounded"
                   />
                )}
            </div>
            </div>
    </div>
 <div className="container mt-4">
 <div className="row">
   <div className="col-4">
     <div className="card shadow p-3 mb-5 bg-body rounded">
       <div className="card-body">
         <CardListFood />
       </div>
     </div>
   </div>
   <div className="col-8">
   <div className="card shadow p-3 mb-5 bg-body rounded">
   <div className="card-header d-flex justify-content-between">
    <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
            <h3 className="mb-3">👇 👩‍🍳 مواد لازم میگو سرخ شده</h3>
       
     </div>
     {open && (
        <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
            <p className="fs-6">میگو : ۳۰۰ گرم</p>
            <p className="fs-6"> پیاز : یک عدد متوسط</p>
            <p className="fs-6">سیر : دو حبه</p>
            <p className="fs-6">نمک : یک قاشق چای خوری</p>
            <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
            <p className="fs-6"> فلفل سیاه :۱/۲ قاشق چای خوری</p>
            <p className="fs-6">پاپریکا : ۱/۲ قاشق چای خوری</p>
            <p className="fs-6"> ادویه محلی جنوب: ۱ قاشق جای خوری</p>
            <p className="fs-6 lh-lg">
            در صورت نداشتن ادویه جنوبی ،میتونید ۱/۲ قاشق جای خوری ادویه کاری اضافه کنید .👩🏻‍🍳🍽️😘

برای شرکت در کلاس های آنلاین آشپزی شِف سجادی داخل گوگل سرچ کنید آکادمی رضیم.

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
 <RedBarberry/>
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
       

    )
}