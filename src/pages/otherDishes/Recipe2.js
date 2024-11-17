import React, { useState } from "react";
import AsideLeft from "../../components/AsideLeft";
import CardListFood from "../CardListFood";
import {getToCookToMake} from "../../data/ToCook"
import Mush from "../../components/property/Mush";
import ReviewForm from "../../components/ReviewForm";
import FooterRazim from "../../components/FooterRazim";
export default function Recipe2(){
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
            <AsideLeft/>
                </div>
            </div>
            <div className="col-8">
            {getToCookToMake.length > 0 && (
              <img
                src={getToCookToMake[1].image}
                alt={getToCookToMake[1].title}
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
                    ><i className={`fa-solid ${ isOpen ?"fa-minus" : "fa-plus"}`} style={{cursor:"pointer"}}></i></span>

                    <h3>👇 👩‍🍳 مواد لازم مرغ تنوری</h3>
                   </div>
{ isOpen && (
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
                    <p className="fs-6 lh-lg">پیاز و سیب زمینی ها رو به صورت حلقه های نازک در بیاورید ، داخل ظرف بچینید، ران مرغ بدون استخوان یا فیله مرغ روی مواد بزارید و سیرهای خورد شده بین مواد قرار بدید ، سس درست کنید خوب هم بزنید و روی مواد بریزید .ظرف داخل فر ۲۳۰ درجه به مدت ۴۰ دقیقه قرار بدید ،۵ دقیقه آخر شعله بالایی روشن کنید تا روی مرغ ها برشته شود .این غذا داخل تابه هم میتونید درست کنید.🩵🌿</p>
                    

                   </div>)}
                </div>
                </div>
             </div>
           </div>
           <div className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <Mush/>
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