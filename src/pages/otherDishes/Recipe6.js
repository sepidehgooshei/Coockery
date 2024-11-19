import React, { useState } from "react";
import { getToCookToMake } from "../../data/ToCook";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import MushForChild from "../../components/property/MushForChild";
const riceFoodItem= getToCookToMake[5]

export default function Recipe6(){
  const [open,setOpen] = useState(false)
  function handleToggle() {
    setOpen((prev)=>!prev)
  }  
  return(
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
          <div className="card shadow p-3 mb-5 bg-body rounded ">
          <AsideLeft/>

          </div>
        </div>
       <div className="col-8">
        <div>

        { getToCookToMake.length > 0 && (<img 
            src={getToCookToMake[5].image} 
            alt={getToCookToMake[5].title} 
            className="img-fluid shadow p-3 mb-5 bg-body rounded " 
          />)}
        </div>
     
       </div>
       </div>
       <div className="container mt-4">
         <div className="row">
            <div className="col-4">
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body">
                <CardListFood/>

                </div>
                </div>
            </div>
            <div className="col-8"> 
            <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark ">
                   <div className="card-header d-flex justify-content-between">
            <span onClick={handleToggle}><i className={`fa-solid ${open? "fa-minus" :"fa-plus"}`} style={{cursor:"pointer"}}></i></span>
           <h3> 👩🏻‍🍳👇🏻 مواد لازم دو پیازه آلو شیرازی  </h3>
          
            </div>
{open && ( 
   <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
  <p className="fs-6">پیاز : یک عدد کوچک</p>
                   <p className="fs-6">سیب زمینی : ۲ عدد متوسط</p>
                   <p className="fs-6">رب گوجه فرنگی : 2 قاشق غذاخوری سرخالی</p>
                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
                   <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
                   <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
                   <p className="fs-6">👇 سبزیجات خشک معطر </p>


                   <p className="fs-6">شنبلیله : یک قاشق چای خوری</p>
                   <p className="fs-6">نعنا خشک : یک قاشق مربا خوری </p>
                   <p className="fs-6">شوید : یک قاشق غذا خوری</p>
                   <h6>:طرز تهیه</h6>
                   <p className="fs-6 lh-lg">
                   ابتدا سیب زمینی شسته و با یک قاشق نمک آبپز کنید ، در این مدت پیاز خلالی خرد کنید بعد ۵ دقیقه تفت دادن ادویه ها و سبزیجات اضافه کنید ، خوب هم بزنید و رب اضافه کنید . بعد از یک دقیقه تفت دادن رب با مواد سیب زمینی های آبپز (پوست گرفته ، نگینی خورد کنید )به مواداضافه (در صورت دلخواه یک قاشق غذاخوری آبغوره هم اضافه کنید )و خوب هم بزنید بعد از ۵ دقیقه دو پیازه آلو شما آماده ست ،نوش جان .

🥔شیرازی های عزیز به سیب زمینی میگن آلو 😁
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
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <MushForChild />

            </div>
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
        </div>
    )
} 



