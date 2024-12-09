import { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import BlackWheat from "../../components/property/BlackWheat";

export default function RiceFood3() {
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchRiceFood() {
      try {
        const response = await fetch("http://localhost:9000/RiceMeat");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setRiceMeatItem(data[2]); // فرض می‌کنیم می‌خواهید آیتم سوم را نمایش دهید
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRiceFood();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
  }

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
                <span onClick={handleToggle}>
                  <i
                    className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
                <h3 className="mb-3">👇 👩‍🍳 مواد لازم ته چین و برنج قالبی</h3>
              </div>
              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">برنج : ۲ پیمانه ۱۰۰ گرمی</p>
                  <p className="fs-6">تخم مرغ : ۱ عدد</p>
                  <p className="fs-6">ماست پر چرب : ۲ قاشق غذا خوری سر خالی</p>
                  <p className="fs-6">روغن مایع : ۴ قاشق غذا خوری</p>
                  <p className="fs-6">زعفران دم کرده : ۲ قاشق غذا خوری غلیظ</p>
                  <p className="fs-6">نمک : ۱ قاشق مرباخوری</p>
                  <p className="fs-6">فلفل سفید : نصف قاشق جای خوری</p>
                  <p className="fs-6">نمک برای جوشاندن برنج : ۱ قاشق غذاخوری پر</p>
                  <h6>:طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                    ابتدا برنج شسته با ۱ قاشق غذاخوری نمک خیس کنید بعد به مدت
                    ۷ الی ۱۰ دقیقه داخل آب در حال جوش بریزید...
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
            <BlackWheat />
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
// import BlackWheat from "../../components/property/BlackWheat";

// export default function RiceFood3() {
//     const[open,setOpen] = useState(false)
//    const riceMeatItem = RiceMeat.length > 2 ? RiceMeat[2] :null
//     function handleToggle() {
//         setOpen((prev)=>!prev)
//     }
//     return(
//         <>
//          <div className="container">
             
//          {riceMeatItem && (
//                     <div className="text-end fw-light p-3">
//                          <h3 className="fw-normal">{riceMeatItem.name}</h3>
//                         <div className="mt-2">
//                         <span>{riceMeatItem.national}</span>
// <span >  <i class="fa-solid fa-location-dot text-muted"></i> </span>
//                         </div>
//                     </div>
//                 )} 
//         <div className="row">
//             <div className="col-4">
//             <div className="card shadow p-3 mb-5 bg-body rounded">
//                       <AsideLeft />
//                     </div>
//             </div>
//             <div className="col-8">
//                {RiceMeat.length > 0 && (<img 
//                src={RiceMeat[2].image}
//                alt={RiceMeat[2].title}
//                className="img-fluid shadow p-3 mb-5 bg-body rounded"
//                /> 
//                )}
//             </div>
//             </div>
//             </div>
//              <div className="container mt-4">
//              <div className="row">
//                <div className="col-4">
//                  <div className="card shadow p-3 mb-5 bg-body rounded">
//                    <div className="card-body">
//                      <CardListFood />
//                    </div>
//                  </div>
//                </div>
//                 <div className="col-8">
//                 <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">
//                 <div className="card-header d-flex justify-content-between">
//              <span onClick={handleToggle}><i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>
//              <h3 className="mb-3">👇 👩‍🍳 مواد لازم ته چین و برنج قالبی</h3>
//                </div>
//               {open && (
//                 <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
//                     <p className="fs-6">برنج : ۲ پیمانه ۱۰۰ گرمی</p>
//                     <p className="fs-6">تخم مرغ : ۱ عدد</p>
//                     <p className="fs-6">ماست پر چرب : ۲ قاشق غذا خوری سر خالی</p>
//                     <p className="fs-6">روغن مایع : ۴ قاشق غذا خوری</p>
//                     <p className="fs-6">زعفران دم کرده : ۲ قاشق غذا خوری غلیظ</p>
//                     <p className="fs-6">نمک : ۱ قاشق مرباخوری</p>
//                     <p className="fs-6">فلفل سفید : نصف قاشق جای خوری</p>
//                     <p className="fs-6">نمک برای جوشاندن برنج : ۱ قاشق غذاخوری پر</p>
//                     <h6> :طرز تهیه</h6>
//                     <p className="fs-6 lh-lg">
//                     ابتدا برنج شسته با ۱ قاشق غذاخوری نمک خیس کنید بعد به مدت ۷ الی ۱۰ دقیقه داخل آب در حال جوش بریزید ، نمک اضافه کنید و بعد از ۷ دقیقه نرم شدن برنج ، آبکش کنید ، داخل مواد تهچین که شامل ماست ، روغن ، تخم مرغ ، نمک ، فلفل سفید و زعفران دم کرده میشه به اندازه ۲ الی ۵ سانت از قالب یا قابلمه تفلونتون میشه برنج بریزید و کف قالب چرب کنید ابتدا مایع تهچین سپس برنج سفید بریزید و به مدت ۴۵ دقیقه روی حرارت خیلی کم اجاق قرار بدید . نوش جان
//                     </p>
//                 </div>
//               )}
//                </div>
//                 </div>
//                </div>
//                </div>
//                <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">

// <BlackWheat/> 
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