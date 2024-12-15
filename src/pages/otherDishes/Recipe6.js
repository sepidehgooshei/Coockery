import React, { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import Potato from "../../components/property/Potato";

export default function Recipe6(){
  const[riceFoodItem,setRiceFoodItem] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);
  const [open,setOpen] = useState(false);

  useEffect(()=>{
    async function fetchCookFoods() {
      try{
        const response = await fetch("http://localhost:9000/getToCookToMake");
      if(!response.ok){
        throw new Error("Failed to fetch data");
      }
const data = await response.json();
setRiceFoodItem(data[5]);
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
  }
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

        { riceFoodItem && (<img 
            src={riceFoodItem.image} 
            alt={riceFoodItem.title} 
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
                   سیب‌زمینی‌ها را پوست بگیرید و به صورت مکعبی کوچک خرد کنید. سپس در مقداری روغن سرخ کنید تا کمی طلایی و برشته شوند.
                    بعد از سرخ شدن آنها را کنار بگذارید. پیاز را ریز خرد کرده و در تابه‌ای با مقداری روغن تفت دهید تا طلایی و نرم شود.
                    وقتی پیازها طلایی شدند، زردچوبه را اضافه کرده و خوب هم بزنید تا عطر آن باز شود. 
                    سپس رب گوجه‌فرنگی را اضافه کنید و چند دقیقه تفت دهید تا رب سرخ شود و رنگ بگیرد.سیب‌زمینی‌های سرخ شده را به تابه اضافه کنید و با پیاز و رب گوجه خوب مخلوط کنید.
                    نمک، فلفل سیاه، شنبلیله، نعنا خشک و شوید خشک را به مواد داخل تابه اضافه کنید. همه مواد را با هم خوب مخلوط کنید.
                    کمی آب جوش به مواد اضافه کنید (حدود 1 تا 1.5 لیوان) و درب تابه را ببندید. بگذارید غذا به آرامی بپزد تا سیب‌زمینی‌ها نرم شوند و طعم‌ها به هم بخورد.
                    وقتی سیب‌زمینی‌ها کاملاً پخته و غذا جا افتاد، دوپیازه آلو شیرازی آماده است.
                    <br/>
                   <br/>
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
            <Potato />

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



