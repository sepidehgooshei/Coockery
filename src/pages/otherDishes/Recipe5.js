import React, { useState,useEffect } from "react";
import FriedEggplant from "../../components/property/FriedEggplant";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";

export default function Recipe5(){
  const [riceFoodItem,setRiceFoodItem] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);  
  const[open,setOpen] = useState(false)

  useEffect(()=>{
    async function fetchCookFoods(){
      try{
        const response = await fetch("http://localhost:9000/getToCookToMake");
     if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setRiceFoodItem(data[4])
      } catch(error){
setError(error.message)
      } finally{
setLoading(false)
      }
}
fetchCookFoods()
  },[])

function handleToggle() {
    setOpen((prev)=>!prev)
}

if (loading) {
  return <div className="text-center mt-5">در حال بارگذاری...</div>;
}
if (error) {
  return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
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
    { riceFoodItem && (
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
                        <CardListFood/>
                    </div>
                </div>
            </div>
            <div className="col-8">
            <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
            <div className="card-header d-flex justify-content-between">
           <span onClick={handleToggle}><i className={`fa solid ${open ? "fa-minus" :"fa-plus"}`} style={{cursor:"pointer"}}></i></span>
           <h3>👇 👩‍🍳 مواد لازم کباب بادمجان تابه ای</h3>
            </div>
            {open &&(
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                    <p className="fs-6">پیاز : یک عدد کوچک</p>
                   <p className="fs-6">گوشت چرخ کرده : ۱۵۰ گرم</p>
                   <p className="fs-6">فلفل دلمه : یک عدد کوچک</p>
                   <p className="fs-6"> بادمجان : ۲ عدد متوسط </p>
                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
                   <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
                   <h6 className="fs-6"> 👇 مواد سس</h6>
                   <p className="fs-6">آب جوش : یک و نیم لیوان فرانسوی</p>
                   <p className="fs-6">رب گوجه فرنگی : 1 قاشق غذاخوری سرخالی</p>
                   <p className="fs-6">سرکه : یک قاشق غذاخوری</p>
                   <p className="fs-6">شکر : یک قاشق غذاخوری</p>
                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
                   <h6>:طرز تهیه</h6>
                   <p className="fs-6 lh-lg">
                   بادمجان‌ها را پوست بگیرید و به صورت حلقه‌ای یا نوارهای بلند برش دهید. سپس آنها را در نمک بزنید و برای 15 دقیقه بگذارید بمانند تا تلخی بادمجان‌ها گرفته شود. بعد از آن بادمجان‌ها را بشویید و خشک کنید.در یک تابه مقداری روغن ریخته و بادمجان‌ها را در آن سرخ کنید تا طلایی و نرم شوند. سپس آنها را از تابه خارج کرده و کنار بگذارید
                   .پیاز را ریز خرد کرده و در همان تابه که بادمجان‌ها را سرخ کرده‌اید، 
                   کمی تفت دهید تا نرم و طلایی شود. سپس گوشت چرخ‌کرده را اضافه کرده و خوب تفت دهید تا رنگ آن تغییر کند.فلفل دلمه‌ای را خرد کرده و به گوشت اضافه کنید. کمی تفت دهید تا فلفل نرم شود.نمک و فلفل سیاه را به مواد داخل تابه اضافه کرده و هم بزنید.
                   در یک کاسه کوچک، آب جوش، رب گوجه فرنگی، سرکه، شکر و نمک را خوب مخلوط کنید تا سس یکدست شود.حالا بادمجان‌های سرخ شده را به تابه اضافه کنید و سس آماده شده را روی آنها بریزید. مواد را خوب مخلوط کنید و درب تابه را ببندید. اجازه دهید غذا برای 10-15 دقیقه به آرامی بپزد تا طعم‌ها به خوبی جذب هم شوند
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
            <FriedEggplant />
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

