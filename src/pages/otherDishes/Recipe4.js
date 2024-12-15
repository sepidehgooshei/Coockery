import React, { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import WhiteEggplant from "../../components/property/WhiteEggplant";


export default function Recipe4(){
  const [riceFoodItem,setRiceFoodItem] = useState(null)
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);
  const [open, setOpen] = useState(false);
   
  useEffect(()=>{
    async function fetchCookFoods() {
     try{
      const response = await fetch("http://localhost:9000/getToCookToMake");
      if (!response.ok) {
       throw new Error("faild to fetch data");
      }
      const data =await response.json();
      setRiceFoodItem(data[3])
       }catch(error){
setError(error.message)
       }finally{
setLoading(false)
       }
     } 
     
fetchCookFoods()
  },[])
    function handleChicken() {
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
                <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
                   <div className="card-header d-flex justify-content-between">
                    <span onClick={handleChicken}
                    ><i className={`fa-solid ${ open ?"fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>

                    <h3>👇 👩‍🍳 مواد لازم خوراک بادمجان</h3>
                   </div>
                   {open && (
                 <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                   <p className="fs-6">پیاز : یک عدد کوچک</p>
                   <p className="fs-6">سینه مرغ : نصف یک سینه کامل</p>
                   <p className="fs-6">فلفل دلمه : یک عدد کوچک</p>
                   <p className="fs-6">سیر : 2 حبه بزرگ</p>
                   <p className="fs-6">رب گوجه فرنگی : 1 قاشق غذاخوری سرخالی</p>
                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
                   <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
                   <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
                   <p className="fs-6">آب جوش : یک و نیم لیوان فرانسوی</p>
                   <p className="fs-6">بادمجون : ۲ عدد متوسط</p>
                   <h6>:طرز تهیه</h6>
                   <p className="fs-6 lh-lg">
                   ابتدا پیاز را خرد کرده و در مقداری روغن تفت دهید تا نرم و طلایی شود. سپس سیر را رنده کرده و اضافه کنید. سینه مرغ را به قطعات کوچک خرد کرده و به پیاز و سیر اضافه کنید تا کمی سرخ شود. فلفل دلمه‌ای را خرد کرده و به مرغ و پیاز اضافه کنید. حالا رب گوجه فرنگی، نمک، زردچوبه، فلفل سیاه را به مواد اضافه کرده و هم بزنید. آب جوش را بریزید و بگذارید تا مرغ پخته شود. بادمجان‌ها را حلقه‌ای برش داده و در روغن سرخ کنید. بعد از اینکه مرغ و مواد کمی جا افتادند، بادمجان‌ها را به خوراک اضافه کرده و اجازه دهید تا خوراک کاملاً جا بیفتد. در نهایت، غذا آماده است
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
            <WhiteEggplant />

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
