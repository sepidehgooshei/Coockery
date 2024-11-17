import { useState } from "react";
import { RiceMeat } from "../../data/RiceFood";
import AsideLeft from "../../components/AsideLeft";
import CardListFood from "../CardListFood";
import ReviewForm from "../../components/ReviewForm";
import FooterRazim from "../../components/FooterRazim";
import WheatMen from "../../components/property/WheatMen";

export default function RiceFood4() {
   const[open,setOpen] = useState()
   const riceMeatItem = RiceMeat.length > 3 ? RiceMeat[3] : null
  function handleClick(){
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
              {RiceMeat.length > 0 && (<img
               src={RiceMeat[3].image}
               alt={RiceMeat[3].title}
               className="img-fluid shadow p-3 mb-5 bg-body rounded"
               />) }
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
<div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
<div className="card-header d-flex justify-content-between">
<span onClick={handleClick} className={`fa-solid ${open ? "fa-minus" :"fa-plus"}`} style={{cursor:"pointer"}}></span>
<h3 className="mb-3">👇 👩‍🍳 مواد لازم ماهی سوخاری رستورانی</h3>
        </div>
        
     {open &&  ( <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
        <p className="fs-6">آب لیمو :۳ قاشق غذاخوری</p>
        <p className="fs-6">آب پیاز :یک عدد رنده شده</p>
        <p className="fs-6">زعفران دم کرده : ۳ قاشق غذا خوری</p>
        <p className="fs-6">سیر : ۳ حبه بزرگ</p>
        <p className="fs-6">نمک : ۱ قاشق چای خوری</p>
        <p className="fs-6">زردچوبه : ۱ قاشق چای خوری</p>
        <p className="fs-6"> زنجبیل : ۱ قاشق چای خوری</p>
        <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری ۱/۲</p>
        <p className="fs-6">مواد لازم آرد سوخاری :</p>
        <p className="fs-6"> آرد سفید : ۱۰۰ گرم</p>
        <p className="fs-6">نمک : یک قاشق چای خوری</p>
        <p className="fs-6">زردچوبه : یک قاشق مربا خوری</p>
        <p className="fs-6">پودر سیر : یک قاشق چای خوری</p>
        <h6> : طرز تهیه</h6>
        <p className="fs-6 lh-lg">

        ۱- انتخاب نوع ماهی به سلیقه شماست ، این مدل سوخاری برای ماهی قزل آلا عالی میشه ،من در این ویدئو از ماهی صافی دریای جنوب استفاده کردم .
حتما ماهی داخل روغن داغ سرخ کنید
شعله گاز بعد از داغ شدن روغن کمی ،کمتر کنید تا ماهی کاملا پخته شود  

</p>

        </div>)}
    </div>
</div>

</div>
</div>
<div className="container mt-4">
        <div className="row">
          <div className="col-4">

         <WheatMen/>
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