import '../../src/pages/CardListFood.css'
import MainDishesLinks from "../components/MainDishesLinks"
import OtherDishesLinks from "../components/OtherDishesLink"

export default function CardListFood(){

    return(
    <div className="text-end d-flex">
        
               <div>
               <MainDishesLinks/>
               <OtherDishesLinks/>
               </div>
               

    
    </div>
)
}







// import { Link } from "react-router-dom";
// const List
// export default function CardListFood() {
//     return(
//         <div className="card-text">
//             <span>لیست انواع پلوها</span> 
                     
//                          <li className="text-end list-unstyled">
//                              <Link to="/RiceFood1" className="no-decoration">
//                                  <span className="rice-size">پسته پلو</span>
//                              </Link>
//                          </li>
//         </div>
//     )
// }



// import React from "react";
// import { Link } from "react-router-dom";
// import "./CardListFood.css"; // فرض می‌کنیم فایل CSS شما نامی مشابه داشته باشد

// export default function CardListFood() {
//     return(
//         <div className="card-text">
//             <ul>
//                 <li className="text-end list-unstyled">
//                     <span>لیست انواع پلوها</span> 
//                     <ul>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood1" className="no-decoration">
//                                 <span className="rice-size">پسته پلو</span>
//                             </Link>
//                         </li>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood2" className="no-decoration">
//                                 <span className="rice-size">کلم پلو شیرازی با کلم قمری</span>
//                             </Link>
//                         </li>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood3" className="no-decoration">
//                                 <span className="rice-size">ته چین و برنج فالبی</span>
//                             </Link>
//                         </li>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood4" className="no-decoration">
//                                 <span className="rice-size">  ماهی سرخ شده رستورانی</span>
//                             </Link>
//                         </li>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood5" className="no-decoration">
//                                 <span className="rice-size">دم پختک دمی باقالی اصفهانی</span>
//                             </Link>
//                         </li>
//                         <li className="text-end list-unstyled">
//                             <Link to="/RiceFood6" className="no-decoration">
//                                 <span className="rice-size">میگو سرخ شده </span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </li>
              
//             </ul>
//         </div>
//     );
// }











// import React from "react"
// import { Link } from "react-router-dom";

// export default function CardListFood() {
//     return(
//         <div className="card-text">
//         <ul>
//           <li className="text-end list-unstyled">
//           <span >لیست انواع پلوها </span> 

//             <Link to="/RiceWithMeat">
//               <ul>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood1" >
//                   <span>پسته پلو</span>
//                   </Link>
//                 </li>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood2" >
//                   <span>کلم پلو شیرازی با کلم قمری</span>
//                   </Link>
//                 </li>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood3" >
//                   <span>ته چین و برنج فالبی</span>
//                   </Link>
//                 </li>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood4" >
//                   <span>ریزوتولقمه ای</span>
//                   </Link>
//                 </li>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood5" >
//                   <span>دم پختک دمی باقالی اصفهانی</span>
//                   </Link>
//                 </li>
//                 <li className="text-end list-unstyled">
//                   <Link to="/RiceFood6" >
//                   <span>ته دیگ چینی</span>
//                   </Link>
//                 </li>
//                 </ul>
          
//             </Link>
//           </li>
//           <li className="text-end list-unstyled">
//             <Link to="/Stew">
//               <span>لیست انواع خورشت ها</span>
//             </Link>
//           </li>
//           <li className="text-end list-unstyled">
//             <Link to="/CocoFood">
//               <span>لیست انواع شامی و کوکو کتلت</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     )
// }