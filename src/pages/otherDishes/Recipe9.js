import React, { useState } from "react";
import { getToCookToMake } from "../../data/ToCook";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import BarberryBlack from "../../components/property/BarberryBlack";
const riceFoodItem= getToCookToMake[8]

export default function Recipe9() {
const [open,setOpen] = useState(false)
function handleToggle() {
 setOpen((prev)=>!prev)
} 
  return(
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
    <AsideLeft/>
</div>

    </div>
    <div className="col-8">
       {getToCookToMake.length > 0 && (<img 
         src={getToCookToMake[8].image}
         alt={getToCookToMake[8].title}
         className="img-fluid shadow p-3 mb-5 bg-body rounded"
         />)}
    </div>
</div> 
</div>

<div className="container">
        <div className="row">
          <div className="col-4">
          <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-body">
                <CardListFood/>
              </div>
            </div>
          </div>

          <div className="col-8">
          <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
          <div className="card-header d-flex justify-content-between">
<span onClick={handleToggle}>
<i
   className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
<h3 className="mb-3">👇 👩‍🍳 مواد لازم بولانی افغان</h3>
</div>
{
  open && (
    <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
 <p className="fs-6">آرد ۳ پیمانه</p>
 <p className="fs-6">نمک ۲ قاشق چای خوری</p>
 <p className="fs-6">آب ۱ پیمانه</p>
 <p className="fs-6">فلفل سیاه ۱ قاشق چای خوری</p>
 <p className="fs-6">پودر فلفل قرمز ۱ قاشق چای خوری</p>
 <p className="fs-6">زردچوبه ۱ قاشق چای خوری</p>
 <p className="fs-6">پودر تخم گشنیز ۱ قاشق چای خوری</p>
 <p className="fs-6">سیر ۲ حبه</p>
 <p className="fs-6">فلفل قرمز تند ۱ عدد</p>
 <p className="fs-6">پیازچه ۱۰۰ گرم</p>
 <p className="fs-6">روغن ۴ قاشق غذا خوری</p>
 <p className="fs-6">گشنیز ۱۰۰ گرم</p>
 <p className="fs-6"> تره ۱۰۰ گرم</p>
<h6>: طرز تهیه بولانی</h6>
<p className="mt-1 lh-lg">
در مرحله اول، باید آرد را با نمک و آب درون یک کاسه مناسب بریزیم، بعد مواد را با هم ترکیب نماییم و خوب ورز دهیم تا خمیری یکدست و منسجم تهیه گردد.
بعد خمیر آماده شده را بعد از ورز دادن بیست دقیقه استراحت می ‌دهیم. سبزی‌ها را می شوییم و ساطوری می‌ نماییم و سیر و فلفل قرمز خرد شده را با بقیه ادویه ها و روغن به سبزی ها اضافه می ‌نماییم و مواد را هم می‌ زنیم.
حالا خمیر را روی مکان تمیزی به صورت کاملا یکدست با وردنه به قطر نیم سانتی متر باز می‌ نماییم و گلوله های کوچکی را از داخلش برمی ‌داریم و پهن می ‌نماییم. سپس مقداری از ترکیبات سبزی را به صورت دایره ای روی خمیر قرار می دهیم.
بعد لبه خمیر را تا می کنیم. داخل ماهی تابه کمی روغن می ریزیم و روی حرارت می گذاریم و بعد از این که داغ شد نان ها را درونش سرخ می ‌نماییم. وقتی سرخ شدند آن ها را از ماهی تابه خارج می کنیم و در ظرف مناسب قرار می دهیم و سرو می نماییم.
</p>
    </div>
  )
}

</div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
            <div className="row">
               <div className="col-4">
<BarberryBlack/>

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


