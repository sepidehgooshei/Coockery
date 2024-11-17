import React, { useState } from "react";
import {getToCookToMake} from "../../data/ToCook"
import AsideLeft from "../../components/AsideLeft";
import CardListFood from "../CardListFood";
import ReviewForm from "../../components/ReviewForm";
import FooterRazim from "../../components/FooterRazim";
import Coconut from "../../components/property/Coconut";
export default function Recipe4(){
    const [isOpen, setIsOpen] = useState(false);
    function handleChicken() {
        setIsOpen((prev)=>!prev)
    }
   return(
    <>
    <div className="container">
    <div className="row">
      <div className="col-4">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <AsideLeft />
        </div>
      </div>

      <div className="col-8">
        {getToCookToMake.length > 0 && (
          <img
            src={getToCookToMake[3].image}
            alt={getToCookToMake[3].title}
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
                    ><i className={`fa-solid ${ isOpen ?"fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>

                    <h3>👇 👩‍🍳 مواد لازم خوراک بادمجان</h3>
                   </div>
                   {isOpen && (
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
                     ابتدا پیاز نگینی تفت بدید داخل روغن تا سبک بشه سپس فلفل دلمه و سیر سرخ کنید بعد ۱ دقیقه مرغ اضافه کنید و بعد از تغییر رنگ مرغ ادویه ها و رب اضافه و کمی سرخ کنید در آخرین مرحله بادمجون های سرخ کرده و نصف لیوان آب اضافه کنید و درب تابه بزارید و اجازه بدید
                     با شعله کم بپزه بعد از ۱۰ دقیقه شام شما آماده ست،نوش جان.
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
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <Coconut />

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


// import React, { useState } from "react";
// import AsideLeft from "./AsideLeft";
// import CardListFood from "./CardListFood";
// import { getToCookToMake } from "../data/ToCook";
// import Coconut from "../components/Coconut";
// import ReviewForm from "../components/ReviewForm";
// import FooterRazim from "../components/FooterRazim";

// export default function Recipe4() {
//   const [open, setOpen] = useState(false);

//   function handleToggle() {
//     setOpen((prev) => !prev);
//   }

//   return (
//     <div className="container">
//     <div className="row bg-light">
//      <div className="col-4">
//          <div className="card">
//         <AsideLeft/>
//          </div>
//      </div>
//      <div className="col-8">
//      {getToCookToMake.length > 0 && (
// <img
// src={getToCookToMake[5].image} 
// alt={getToCookToMake[5].title}
// className="img-fluid"
// />
// )}
//      </div>
//     </div>
//     <div className="container mt-4">
//              <div className="row bg-light">
//                 <div className="col-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <CardListFood/>
//                         </div>
//                     </div>
//                 </div>

//           <div className="col-8">
//             <div className="card text-end m-3 text-dark">
//               <div className="card-header d-flex justify-content-between">
//                 <span onClick={handleToggle}>
//                   <i
//                     className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
//                     style={{ cursor: "pointer" }}
//                   ></i>
//                 </span>
//                 <h3>👇 👩‍🍳 مواد لازم و طرز تهیه</h3>
//               </div>
//               {open && (
//                 <div className="card-body">
//                   <p className="fs-6">پیاز : یک عدد کوچک</p>
//                   <p className="fs-6">سینه مرغ : نصف یک سینه کامل</p>
//                   <p className="fs-6">فلفل دلمه : یک عدد کوچک</p>
//                   <p className="fs-6">سیر : 2 حبه بزرگ</p>
//                   <p className="fs-6">رب گوجه فرنگی : 1 قاشق غذاخوری سرخالی</p>
//                   <p className="fs-6">نمک : یک قاشق چای خوری</p>
//                   <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
//                   <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
//                   <p className="fs-6">آب جوش : یک و نیم لیوان فرانسوی</p>
//                   <p className="fs-6">بادمجون : ۲ عدد متوسط</p>
//                   <h6>:طرز تهیه</h6>
//                   <p className="fs-6 lh-lg">
//                     ابتدا پیاز نگینی تفت بدید داخل روغن تا سبک بشه سپس فلفل دلمه و سیر سرخ کنید بعد ۱ دقیقه مرغ اضافه کنید و بعد از تغییر رنگ مرغ ادویه ها و رب اضافه و کمی سرخ کنید در آخرین مرحله بادمجون های سرخ کرده و نصف لیوان آب اضافه کنید و درب تابه بزارید و اجازه بدید
//                     با شعله کم بپزه بعد از ۱۰ دقیقه شام شما آماده ست،نوش جان.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">
//             <Coconut />
//           </div>
//           <div className="col-8">
//             <div className="card">
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

//         <div className="row bg-white">
//           <FooterRazim />
//         </div>
//         </div>
        
//       </footer>
//     </div>
//   );
// }

