import { useState ,useEffect} from "react";
import "../../pages/dashboard/dashboard.css";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import CoconutDry from "../../components/property/CoconutDry";

export default function RiceFood2() {
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const[open,setOpen]= useState(false)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  
  useEffect(()=>{
    async function fetchRiceFood(){
      try{
        const response = await fetch("http://localhost:9000/RiceMeat");
      if(!response.ok){
        throw new Error("Failed to fetch data");
      }
      const data = await response.json()
    setRiceMeatItem(data[1])  
    }
    catch(error){
setError(error.message)
    } finally{
      setLoading(false)
    }
    }
    fetchRiceFood()
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
        {riceMeatItem && (
                    <div className="text-end fw-light p-3">
                         <h3 className="fw-normal">{riceMeatItem.name}</h3>
                        <div className="mt-2">
                        <span>{riceMeatItem.national}</span>
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
                    {riceMeatItem &&(
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
        <span onClick={handleToggle}><i className={`fa-solid ${open? "fa-minus" :"fa-plus"}`} style={{cursor:"pointer"}}></i> </span>
        <h3 className="mb-3">👇 👩‍🍳  مواد لازم جوجه حلزونی رستورانی</h3>

           </div>
           {open &&(
            <div className="card-body shadow-none p-3 mb-5 bg-light rounded ">
                <p className="fs-6">فیله مرغ : ۵۰۰ گرم </p>
                <p className="fs-6">پیاز : یک عدد بزرگ</p>
                <p className="fs-6"> سیر : ۲ حبه بزرگ</p>
                <p className="fs-6">نمک : یک قاشق چای خوری</p>
                <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
                <p className="fs-6"> پاپریکا : نصف قاشق چای خوری</p>
                <p className="fs-6"> زعفران دم کرده : ۳ قاشق غذا خوری</p>
                <p className="fs-6">روغن : به مقدار لازم</p>
                <h6> :طرز تهیه</h6>
                <p className="fs-6 lh-lg">
                فیله های مرغ یا سینه برش بزنید و به مدت یک ساعت داخل مواد که شامل پیاز خلالی یا نگینی خورد شده ، سیر یا پودر سیر ، نمک ، فلفل سیاه ، فلفل پاپریکا و زعفران دم کرده میشه قرار بدید بعد از یک ساعت به شکل حلزونی در بیاورید و با شیخ چوبی کوچکی یا خلال دندان ثابتش کنید و داخل روغن هر طرف ۵ دقیقه سرخ کنید و نوش جان کنید .
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

 <CoconutDry/>
 
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

// import { useState } from "react";
// import { RiceMeat } from "../../data/RiceFood";
// import AsideLeft from "../../components/other/AsideLeft";
// import CardListFood from "../../components/other/CardListFood";
// import FooterRazim from "../../components/other/FooterRazim";
// import ReviewForm from "../../components/other/ReviewForm";
// import CoconutDry from "../../components/property/CoconutDry";

// export default function RiceFood2() {
//    const[open,setOpen]= useState(false)
//    const riceMeatItem = RiceMeat.length > 1 ? RiceMeat[1] : null
//    function handleToggle() {
//     setOpen((prev)=>!prev)
//    }
//     return(
//         <>
//         <div className="container">
//         {riceMeatItem && (
//                     <div className="text-end fw-light p-3">
//                          <h3 className="fw-normal">{riceMeatItem.name}</h3>
//                         <div className="mt-2">
//                         <span>{riceMeatItem.national}</span>
// <span >  <i class="fa-solid fa-location-dot text-muted"></i> </span>
//                         </div>
//                     </div>
//                 )} 
//             <div className="row">
//                 <div className="col-4">
//                 <div className="card shadow p-3 mb-5 bg-body rounded">
//                 <AsideLeft/>
//                     </div>
//                 </div>
//                 <div className="col-8">
//                     {RiceMeat.length > 0 &&(
//                         <img 
//                         src={RiceMeat[1].image}
//                         alt={RiceMeat[1].title}
//                         className="img-fluid shadow p-3 mb-5 bg-body rounded"
//                         />
//                     )}
//                 </div>
//             </div>
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
//         <span onClick={handleToggle}><i className={`fa-solid ${open? "fa-minus" :"fa-plus"}`} style={{cursor:"pointer"}}></i> </span>
//         <h3 className="mb-3">👇 👩‍🍳  مواد لازم جوجه حلزونی رستورانی</h3>

//            </div>
//            {open &&(
//             <div className="card-body shadow-none p-3 mb-5 bg-light rounded ">
//                 <p className="fs-6">فیله مرغ : ۵۰۰ گرم </p>
//                 <p className="fs-6">پیاز : یک عدد بزرگ</p>
//                 <p className="fs-6"> سیر : ۲ حبه بزرگ</p>
//                 <p className="fs-6">نمک : یک قاشق چای خوری</p>
//                 <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
//                 <p className="fs-6"> پاپریکا : نصف قاشق چای خوری</p>
//                 <p className="fs-6"> زعفران دم کرده : ۳ قاشق غذا خوری</p>
//                 <p className="fs-6">روغن : به مقدار لازم</p>
//                 <h6> :طرز تهیه</h6>
//                 <p className="fs-6 lh-lg">
//                 فیله های مرغ یا سینه برش بزنید و به مدت یک ساعت داخل مواد که شامل پیاز خلالی یا نگینی خورد شده ، سیر یا پودر سیر ، نمک ، فلفل سیاه ، فلفل پاپریکا و زعفران دم کرده میشه قرار بدید بعد از یک ساعت به شکل حلزونی در بیاورید و با شیخ چوبی کوچکی یا خلال دندان ثابتش کنید و داخل روغن هر طرف ۵ دقیقه سرخ کنید و نوش جان کنید .
// </p>
//             </div>
//            )}
//             </div>
//           </div>
          
//           </div>
//           </div>
//           <div className="container mt-4">
//         <div className="row">
//           <div className="col-4">

//  <CoconutDry/>
 
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
//           </>
//     )
// }