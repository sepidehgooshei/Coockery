import React, { useEffect, useState } from "react";
import "../../pages/dashboard/dashboard.css";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import ReviewForm from "../../components/other/ReviewForm";
import BakingSoda from "../../components/property/BakingSoda";
import FooterRazim from "../../components/other/FooterRazim";

export default function RiceFood1() {
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRiceFood() {
      try {
        const response = await fetch("http://localhost:9000/RiceMeat");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRiceMeatItem(data[0]); // دریافت آیتم اول
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRiceFood();
  }, []);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  if (loading) {
    return <div className="text-center mt-5">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
  }

  return (
    <>
      <div className="container">
        {riceMeatItem && (
          <div className="text-end fw-light p-3">
            <h3 className="fw-normal">{riceMeatItem.name}</h3>
            <div className="mt-2">
              <span>{riceMeatItem.national}</span>
              <span>
                {" "}
                <i className="fa-solid fa-location-dot text-muted"></i>{" "}
              </span>
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
            {riceMeatItem && (
              <img
                src={riceMeatItem.image}
                alt={riceMeatItem.title}
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
                <CardListFood />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
              <div className="card-header d-flex justify-content-between">
                <span onClick={handleToggle}>
                  <i
                    className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
                <h3 className="mb-3">👇 👩‍🍳 مواد لازم پسته پلو</h3>
              </div>
              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">برنج ۳ تا ۴ پیمانه</p>
                  <p className="fs-6">مغز پسته تازه ۲ پیمانه</p>
                  <p className="fs-6">شوید خشک ۲ قاشق غذاخوری</p>
                  <p className="fs-6">زعفران دم کرده ۲ قاشق غذاخوری</p>
                  <p className="fs-6">نمک و فلفل سیاه به مقدار کافی</p>
                  <p className="fs-6">زردچوبه و روغن به مقدار کافی</p>
                  <h6>:طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                    {/* توضیحات دستور پخت */}
                    برای تهیه پسته پلو، ...
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
            <BakingSoda />
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
  );
}





// import { useState } from "react";
// import {RiceMeat} from "../../data/RiceFood"
// import AsideLeft from "../../components/other/AsideLeft";
// import CardListFood from "../../components/other/CardListFood";
// import ReviewForm from "../../components/other/ReviewForm";
// import BakingSoda from "../../components/property/BakingSoda"
// import FooterRazim from "../../components/other/FooterRazim";
// const riceMeatItem = RiceMeat[0]
//  export default function RiceFood1() {
//   const[open,setOpen] = useState(false)
//   function handleToggle() {
//     setOpen((prev)=>!prev)
//   }  
//   return(
//         <>
//            <div className="container">
//            {riceMeatItem && (
//                     <div className="text-end fw-light p-3">
//                          <h3 className="fw-normal">{riceMeatItem.name}</h3>
//                         <div className="mt-2">
//                         <span>{riceMeatItem.national}</span>
// <span >  <i class="fa-solid fa-location-dot text-muted"></i> </span>
//                         </div>
//                     </div>
//                 )} 
// <div className="row">
//     <div className="col-4">
//     <div className="card shadow p-3 mb-5 bg-body rounded">
//               <AsideLeft />
//             </div>
//     </div>
//     <div className="col-8">
//         {RiceMeat.length > 0 &&(
// <img
// src={RiceMeat[0].image}
// alt={RiceMeat[0].title}
// className="img-fluid shadow p-3 mb-5 bg-body rounded"
// />
//         )}
//     </div>
// </div>
//         </div>
//         <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">
//             <div className="card shadow p-3 mb-5 bg-body rounded">
//               <div className="card-body">
//                 <CardListFood />
//               </div>
//             </div>
//           </div>
//           <div className="col-8">
//           <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
//           <div className="card-header d-flex justify-content-between">
//             <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus":"fa-plus"}`} style={{cursor:"pointer"}}></i></span>
//             <h3 className="mb-3">👇 👩‍🍳 مواد لازم پسته پلو</h3>
//             </div>
//            {open && (
//             <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
//               <p className="fs-6">برنج ۳ تا ۴ پیمانه  </p>
//               <p className="fs-6">مغز پسته تازه ۲ پیمانه</p>
//               <p className="fs-6">شوید خشک ۲ قاشق غذاخوری</p>
//               <p className="fs-6">زعفران دم کرده ۲ قاشق غذاخوری</p>
//               <p className="fs-6">نمک و فلفل سیاه به مقدار کافی</p>
//               <p className="fs-6">زردچوبه و روغن به مقدار کافی</p>
//               <h6> :طرز تهیه</h6>
//                   <p className="fs-6 lh-lg">
//                   برای تهیه پسته پلو، اول، برنج را درون یک ظرف که دارای آب می باشد می ریزیم، بعد یک قاشق نمک به آن اضافه می نماییم و صبر می کنیم برنج خیس بخورد. باید توجه داشته باشید که اگر برنج از نوع برنج تازه است، نیاز به خیس کردن برنج به مدت طولانی نیست.
// در این بخش نصف قابلمه مناسبی را آب می ریزیم بعد روی حرارت زیاد می گذاریم، زمانی که آب جوشید، یک قاشق غذاخوری روغن و یک قاشق چایخوری نمک به آب جوش اضافه می نماییم.
// وقتی برنج کاملا خیسانده شد آن را با مغز پسته داخل قابلمه می ریزیم، بعد منتظر می مانیم تا آب دوباره بجوشد. وقتی آب جوشید، با قاشق کف های روی آب را با قاشق برمی داریم و از ظرف خارج می نماییم.
// سپس به مدت هشت تا دوازده دقیقه منتظر می مانیم تا پخت اولیه برنج انجام گیرد. بعد از این که هشت دقیقه گذشت، مقداری از برنج را زیر دندان تست می نماییم، اگر اطراف برنج کاملا نرم بود و مغزش کمی سفت بود، آن موقع زمان آب کشی برنج است.
// در مرحله پنجم، مقداری روغن در قابلمه ای که برای پخت انتخاب کرده ایم می ریزیم، بعد برای ته دیگ می توانیم به سلیقه خودمان از سیب زمینی ورقه ورقه شده یا نان لواش استفاده کنیم و آن ها را در ته ظرف بچینیم.
// در این بخش مقداری از ترکیب برنج و پسته را می ریزیم روی ته دیگ و مقداری شوید خشک هم بر روی برنج می ریزیم. به همین شکل کل مواد را درون قابلمه می گذاریم، بعد زعفران دم کرده را به صورت پخش شده روی برنج می ریزیم.
// در مرحله آخر، یک شعله پخش روی حرارت خیلی ملایم می گذاریم و قابلمه را روی شعله پخش قرار می دهیم و صبر می کنیم تا پسته پلو به مدت یک تا یک و نیم ساعت دم بکشد. در آخر، پسته پلو را با مرغ یا ماهیچه سرو می نماییم.
//                   </p>
//             </div>
//            )}
//             </div>
//           </div>
//         </div>
//         </div>
//         <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">
//  <BakingSoda/>
 
//            </div>

//           <div className="col-8">
//             <div className="card shadow p-3 mb-5 bg-body rounded">
//               <div className="card-header d-flex justify-content-end">
//                 <span className="fs-5 fw-normal">نظر خود را بیان کنید</span>
//               </div>
//               <div className="text-end">
//                 <ReviewForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer>
//         <div className="container">
//           <div className="row bg-white">
//             <FooterRazim />
//           </div>
//         </div>
//       </footer>
//         </>
     

//     )
// }