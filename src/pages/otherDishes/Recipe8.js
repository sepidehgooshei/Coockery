import React, { useState } from "react";
import AsideLeft from "../../components/AsideLeft";
import CardListFood from "../CardListFood";
import { getToCookToMake } from "../../data/ToCook";
import ReviewForm from "../../components/ReviewForm";
import FooterRazim from "../../components/FooterRazim";
import LentilsForChild from "../../components/property/LentilsForChild";

export default function Recipe8() {
  const [open,setOpen] = useState(false)
    function handleToggle() {
      setOpen((prev)=>!prev)
    }
    return(
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
                        src={getToCookToMake[7].image}
                        alt={getToCookToMake[7].title}
                        className="img-fluid shadow p-3 mb-5 bg-body rounded"
                     />
                  )}
               </div>
            </div>
         </div>
            <div className="container mt-4">
        <div className="row bg-light">
          <div className="col-4">
          <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark m-3">
              <div className="card-body">
                <CardListFood/>
              </div>
            </div>
          </div>

          <div className="col-8">
          <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark m-3">
          <div className="card-header d-flex justify-content-between">
           <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
           <h3 className="mb-3">👇 👩‍🍳 مواد لازم اسکالوپ مرغ</h3>
            </div>
              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                           <p className="fs-6"> ران مرغ ۵ تا ۶ عدد </p>
                           <p className="fs-6">  سس مایونز : ۲ قاشق غذاخوری</p>
                           <p className="fs-6"> ماست یک پیمانه  </p>
                           <p className="fs-6">فلفل دلمه : ۱ عدد کوچک</p>
                           <p className="fs-6">نمک و فلفل به میزان لازم</p>
                           <p className="fs-6"> قارچ : ۴ عدد متوسط</p>
                           <p className="fs-6">آبلیمو ۲ قاشق غذا خوری</p>   
                           <p className="fs-6">پودر سوخاری ۱ پیمانه</p>
                           <p className="fs-6">آرد سفید نصف پیمانه</p>
                           <p className="fs-6">تخم مرغ ۲ عدد</p>
                           <p className="mt-1 lh-lg">برای تهیه نمودن اسکالوپ خوشمزه و مخصوص با مرغ ما باید اول، پیاز را کاملا بشوییم و پوستش را جدا نماییم. بعد پیاز را یک دست به شکل حقه حلقه نازک و کاملا یکدست برش بزنیم و به آن نمک و آبلیمو می زنیم و کاملا چنگ می زنیم.
در ادامه باید به موادمان، سس مایونز به همراه ماست و فلفل دلمه ای ورقه ایی شده نازک اضافه نماییم و اگر خواستیم می ‌شود زعفران هم به مواد اضافه کرد بعد ران مرغ ها را به صورت کتلت دسته دار شکل می دهیم.
به این شکل که اول گوشت ران را باید از سر استخوان جدا نماییم ولی انتهایش را نباید جدا کنیم و روی استخوان گوشت را بر می گردانیم جوری که استخوان کامل رویت گردد ولی سر آن به گوشت ران وصل باشد.
در ادامه ران ها را به مدت شش تا دوازده ساعت در ظرفی که حاوی مواد آماده شده است قرار می دهیم. بعد باید مرغ ها را از مواد جدا نموده و بعد با رعایت ترتیب ابتدا در آرد سفید، سپس در تخم مرغ که زده شده می باشد و سپس در پودر سوخاری غلت دهیم و در ادامه در روغن سرخ نماییم. سپس باید مرغ های سرخ شده را در ظرف مناسب قرار دهیم.
می شود مرغ ها را با سبزیجاتی سرخ شده هستند یا به صورت کبابی استفاده می شوند تزیین کرد و بصورت دور چین استفاده نمود. بعد آن را با نان یا سبزی سرو کرد. چون مرغ ها در سبزیجات قرار داده شده اند، طعم و بوی خیلی خوبی دارند و انواع طعم ها را می شود در آن حس کرد.
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
    
              <LentilsForChild/>

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


