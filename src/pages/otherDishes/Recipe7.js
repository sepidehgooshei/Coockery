import React, { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import WheatChildren from "../../components/property/WheatChildren";

export default function Recipe7() {
const [riceFoodItem,setRiceFoodItem] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);
    const[open,setOpen] = useState(false);
   function handleToggle() {
    setOpen((prev)=>!prev)
   }
   useEffect(()=>{
    async function fetchCookFoods() {
      try{
        const response = await fetch("http://localhost:9000/getToCookToMake");
      if(!response.ok){
        throw new Error("Failed to fetch data");
      }
const data = await response.json();
setRiceFoodItem(data[6]);
      }catch(error){
setError(error.message);
      }finally{
setLoading(false);
      }
    }
    fetchCookFoods();
  },[]);
  if (loading) {
    return <div className="text-center mt-5">در حال بارگذاری...</div>;
  }
  if (error) {
    return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
  }  return(
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
                <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
                        <div className="card-body">
                            <CardListFood/>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
                        <div className="card-header d-flex justify-content-between">
                            <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
                       <h3>طرز تهیه سوپ شیر خامه</h3>
                        </div>
                        {open && (
                            <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
<p className="fs-6">پیاز : یک عدد کوچک</p>
                   <p className="fs-6">سینه مرغ : نصف یک سینه کامل</p>
                   <p className="fs-6">فلفل دلمه : یک عدد کوچک</p>
                   <p className="fs-6">جو پرک : یک لیوان فرانسوی (حدود ۱۰۰ گرم )</p>
                   <p className="fs-6"> شیر : ۲ لیوان</p>
                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
                   <p className="fs-6"> خامه صورتی : ۳ قاشق غذا خوری</p>
                   <p className="fs-6">  هویج : ۱ عدد کوچک (رنده درشت )</p>
                   <p className="fs-6"> قارچ : ۲۰۰ گرم</p>     
                   <p className="fs-6"> کره : ۴۰ گرم </p>
                   <p className="fs-6"> آب : ۸ لیوان </p>
                 
                            </div>
                        )}
                    </div>
                </div>
            </div>
           </div>
           <div className="container mt-4">
         <div className="row">
           <div className="col-4">
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <WheatChildren />

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

                   </>

    )
}