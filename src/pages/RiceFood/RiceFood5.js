import { useState, useEffect } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import MushBeans from "../../components/property/MushBeans";

export default function RiceFood5() {
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const [open, setOpen] = useState(false); // Initialize to false
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRiceFood() {
      try {
        const response = await fetch("http://localhost:9000/RiceMeat");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setRiceMeatItem(data[4]); // Set the data for the 5th item
      } catch (error) {
        setError(error.message); // Set the error if fetching fails
      } finally {
        setLoading(false); // Stop loading once the fetch is done
      }
    }

    fetchRiceFood();
  }, []);

  if (loading) return <div className="text-center mt-5">در حال بارگذاری...</div>;
  if (error) return <div className="text-center mt-5">Error: {error}</div>;

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <div className="container">
        {riceMeatItem && (
          <div className="text-end fw-light p-3">
            <h3 className="fw-normal">{riceMeatItem.name}</h3>
            <div className="mt-2">
              <span>{riceMeatItem.national}</span>
              <span><i className="fa-solid fa-location-dot text-muted"></i></span>
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
            {riceMeatItem && riceMeatItem.image && (
              <img
                src={riceMeatItem.image}
                alt={riceMeatItem.name}
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
                <span
                  onClick={handleToggle}
                  className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                  style={{ cursor: "pointer" }}
                ></span>
                <h3 className="mb-3">👇 👩‍🍳 مواد لازم دمپختک دمی باقالی اصفهانی</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">برنج ۴ پیمانه</p>
                  <p className="fs-6">باقالی زرد ۱٫۵ پیمانه</p>
                  <p className="fs-6">پیاز ۲ عدد متوسط</p>
                  <p className="fs-6">تخم مرغ ۲ عدد</p>
                  <p className="fs-6">آب ۴٫۵ پیمانه</p>
                  <p className="fs-6">کره ۵۰ گرم</p>
                  <p className="fs-6">نمک و فلفل سیاه به اندازه کافی</p>
                  <p className="fs-6">روغن و زردچوبه به اندازه کافی</p>
                  <h6>: طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                    در مرحله اول برای تهیه دمپختک ابتدا باقالی ها را به مدت دو
                    ساعت در یک ظرف آب می خیس می کنیم تا نرم گردند، برنج را هم
                    با توجه به نوع آن در یک ظرف دیگر با کمی نمک خیس می کنیم...
                    {/* Additional instructions */}
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
            <MushBeans />
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
// import { RiceMeat } from "../../data/RiceFood";
// import AsideLeft from "../../components/other/AsideLeft";
// import CardListFood from "../../components/other/CardListFood";
// import FooterRazim from "../../components/other/FooterRazim";
// import ReviewForm from "../../components/other/ReviewForm";
// import MushBeans from "../../components/property/MushBeans";

// export default function RiceFood5() {
//    const [open,setOpen] = useState()
//    const riceMeatItem = RiceMeat.length > 4 ? RiceMeat[4] : null
    
//     function handleToggle() {
//     setOpen((prev)=>!prev)
//    }
//     return(
//     <>
//     <div className="container">
       
//     {riceMeatItem && (
//                     <div className="text-end fw-light p-3">
//                          <h3 className="fw-normal">{riceMeatItem.name}</h3>
//                         <div className="mt-2">
//                         <span>{riceMeatItem.national}</span>
// <span >  <i class="fa-solid fa-location-dot text-muted"></i> </span>
//                         </div>
//                     </div>
//                 )} 
//   <div className="row">
//     <div className="col-4">
//     <div className="card shadow p-3 mb-5 bg-body rounded">
//               <AsideLeft />
//             </div>
//     </div>
// <div className="col-8">
//     {RiceMeat.length > 0 && (
//         <img 
//         src={RiceMeat[4].image}
//         alt={RiceMeat[3].title}
//         className="img-fluid shadow p-3 mb-5 bg-body rounded"
//         />
//     )}
// </div>
//     </div>
// </div>

// <div className="container mt-4">
// <div className="row">
//   <div className="col-4">
//     <div className="card shadow p-3 mb-5 bg-body rounded">
//       <div className="card-body">
//         <CardListFood />
//       </div>
//     </div>
//   </div>   
//   <div className="col-8">
//   <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
//   <div className="card-header d-flex justify-content-between">
//   <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
//         <h3 className="mb-3">👇 👩‍🍳   مواد لازم دمپختک دمی باقالی اصفهانی</h3>
//        </div>
//   {open && ( 
//     <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
//    <p className="fs-6">برنج ۴ پیمانه</p>   
//    <p className="fs-6">باقالی زرد ۱٫۵ پیمانه</p>   
//    <p className="fs-6">پیاز ۲ عدد متوسط</p>   
//    <p className="fs-6">تخم مرغ ۲ عدد</p> 
//    <p className="fs-6">آب ۴٫۵ پیمانه</p>   
//    <p className="fs-6">کره ۵۰ گرم</p>   
//    <p className="fs-6">نمک و فلفل سیاه به اندازه کافی</p>   
//    <p className="fs-6">روغن و زردچوبه به اندازه کافی</p> 
//    <h6> :طرز تهیه</h6>
//    <p className="fs-6 lh-lg">
//    در مرحله اول برای تهیه دمپختک ابتدا باقالی ها را به مدت دو ساعت در یک ظرف آب می خیس می کنیم تا نرم گردند، برنج را هم با توجه به نوع آن در یک ظرف دیگر با کمی نمک خیس می کنیم. در ابتدا پیازها را ریز و به شکل نگینی خرد می نماییم.
// بعد پیازهای نگینی را با نصف کره در یک قابلمه مناسب تفت سرخ می کنیم تا پیازها به اصطلاح سبک و طلایی شوند، بعد نصف پیاز داغ را کنار می گذاریم. سپس باقالی ها را آبکشی می نماییم و به پیاز می افزاییم.
// سپس چند دقیقه ای باقالی ها را سرخ می کنیم تا موقع پخت له نگردند. سپس کمی نمک، فلفل سیاه و زردچوبه به باقالی ها می افزاییم ( به دلخواه می توانید ادویه های مورد علاقه تان را نیز در این مرحله بیفزایید)
// بعد باقالی ها را با ادویه ها خوب سرخ می کنیم تا با هم ترکیب و یکدست گردند. بعد از اینکه مواد به خوبی ترکیب گشتند دو پیمانه آب گرم اضافه می نماییم و درب قابلمه را می گذاریم تا به مدت ده دقیقه باقالی ها با حرارت خیلی ملایم بپزند.
// سپس برنج را آبکشی می نماییم، بعد به قابلمه اضافه می افزاییم. پس از اضافه نمودن برنج دو و نیم پیمانه دیگر آب گرم، با پیاز داغ و یک قاشق غذاخوری نمک و در صورت خواستتان برای بهتر شدن رنگ غذا مقداری زعفران دم کرده هم اضافه می نماییم.
// سپس حرارت زیر ظرف را زیاد می نماییم تا آب سریعتر بجوشد. سپس وقتی آب قابلمه به جوش آمد حرارت زیرش را ملایم تر کرده و منتظر می مانیم تا آب قابلمه کشیده شود و آب خیلی کمی داخل قابلمه باش
//    </p>
//         </div>)}
//     </div>
//   </div>
//   </div>
//   </div>
//   <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">
// <MushBeans/>

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


//     </>
        
       
  
       
//     )
// }