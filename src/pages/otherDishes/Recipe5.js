import React, { useState,useEffect } from "react";
import Mush from "../../components/property/Mush";
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
                   گوشت چرخ کرده (ترجیحا ترکیب گوشت گوساله و گوسفندی ) با پیاز رنده شده ،فلفل دلمه ریز خورد شده ، نمک و ادویه ها به خوبی ورز بدید، با بادمجان خورد شده طبق ویدئو به سیخ بزنید سپس به مدت ۵ سرخ کنید و برای سس کمی پیاز کنار سیخ بادمجان ها سرخ کنید سپس سس که ترکیب رب، شکر ، سرکه ، آب جوش و کمی نمک است داخل تابه بریزید و به مدت ۲۰ دقیقه با شعله متوسط و درب بسته بپزید و برای غلیظ شدن سس ۵ دقیقه بدون درب بپزید ، کباب بادمجان تابه ای شما آماده ست .نوش جان
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
            <Mush />
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

