import React, { useState,useEffect} from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import Chicken from "../../components/property/Chicken";

export default function Recipe2(){
  const [riceFoodItem,setRiceFoodItem] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError]= useState(null);  
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    async function fetchCookFoods(){
      try{
        const response = await fetch("http://localhost:9000/getToCookToMake");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRiceFoodItem(data[1])
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
            <AsideLeft/>
                </div>
            </div>
            <div className="col-8">
            {riceFoodItem && (
              <img
                src={riceFoodItem.image}
                alt={riceFoodItem.title}
                className="img-fluid shadow p-3 mb-5 bg-body rounded" />

             
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
                    <span onClick={handleChicken}
                    ><i className={`fa-solid ${ open ?"fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>

                    <h3>👇 👩‍🍳 مواد لازم مرغ تنوری</h3>
                   </div>
{ open && (
                   <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                   <p className="fs-6">پیاز : ۱ عدد بزرگ</p>
                    <p className="fs-6">سیب زمینی : ۲ عدد کوچک (برش های باریک بزنید)</p>
                    <p className="fs-6"> فیله یا ران مرغ بدون استخوان : فیله۶ عدد،ران ۳ عدد</p>
                    <p className="fs-6">سیر : ۴ حبه</p>
                    <p className="fs-6">شیر : نصف لیوان فرانسوی</p>
                    <p className="fs-6">روغن مایع یا روغن زیتون: ۴ قاشق غذاخوری</p>
                    <p className="fs-6">نمک : یک قاشق چای خوری</p>
                    <p className="fs-6"> آویشن : یک قاشق چای خوری</p>
                    <p className="fs-6">پاپریکا : یک قاشق چای خوری</p>
                    <p className="fs-6"> فلفل سیاه : نصف قاشق چای خوری</p>
                    <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
                    <p className="fs-6"> فلفل دلمه : نصف یک فلفل دلمه کوچک </p>
                    <h6> :طرز تهیه</h6>
                    <p className="fs-6 lh-lg">

                    پیاز را پوست کنده و خرد کنید.
سیب‌زمینی‌ها را پوست کنده و به صورت برش‌های باریک یا ورقه‌ای خرد کنید.
مرغ (فیله یا ران مرغ) را شسته و به اندازه دلخواه برش دهید.
سیرها را ریز خرد یا له کنید.
فلفل دلمه‌ای را به صورت نگینی خرد کنید.در یک قابلمه یا ماهیتابه، ۲ قاشق غذاخوری روغن بریزید و روی حرارت متوسط قرار دهید.
پیازهای خرد شده را اضافه کنید و تفت دهید تا طلایی و نرم شوند.
سیر خرد شده را به پیاز اضافه کنید و کمی دیگر تفت دهید تا بوی سیر به مشام برسد.مرغ‌های خرد شده (فیله یا ران مرغ) را به پیاز و سیر اضافه کنید و با مواد دیگر تفت دهید.
مرغ را برای چند دقیقه تفت دهید تا کمی رنگ آن تغییر کند.نمک، آویشن، پاپریکا، فلفل سیاه و زردچوبه را به مرغ اضافه کنید و مواد را به‌خوبی با هم مخلوط کنید تا مرغ‌ها به ادویه‌ها آغشته شوند.سیب‌زمینی‌های خرد شده را به قابلمه اضافه کنید و کمی تفت دهید تا کمی نرم شوند.
فلفل دلمه‌ای خرد شده را نیز اضافه کنید و هم بزنید
                      
                      </p>
                    

                   </div>)}
                </div>
                </div>
             </div>
           </div>
           <div className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <Chicken/>
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