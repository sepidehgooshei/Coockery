import { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import WhitePepper from "../../components/property/WhitePepper";

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
        setRiceMeatItem(data[2]); 
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchRiceFood();
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
  }

  return (
    <>
      <main className="container">
        {riceMeatItem && (
          <div className="text-end fw-light p-3">
            <h3 className="fw-normal">{riceMeatItem.name || "N/A"}</h3>
            <div className="mt-2">
              <span>{riceMeatItem.national || "N/A"}</span>
              <span>
                {" "}
                <i className="fa-solid fa-location-dot text-muted"></i>{" "}
              </span>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <AsideLeft />
            </div>
          </div>
          <div className="col-md-8 col-12">
            {riceMeatItem && riceMeatItem.image ? (
              <img
                src={riceMeatItem.image}
                alt={riceMeatItem.name || "Image of rice meat dish"}
                className="img-fluid shadow p-3 mb-5 bg-body rounded"
              />
            ) : (
              <div>Image not available</div>
            )}
          </div>
        </div>
      </main>

             <div className="container mt-4">
         <div className="row">
           <div className="col-4">
             <div className="card shadow p-3 mb-5 bg-body rounded">
               <div className="card-body">
                 <CardListFood />
               </div>
             </div>
           </div>
           <div className="col-8">             <div className="card shadow p-3 mb-5 bg-body rounded text-end text-dark">               <div className="card-header d-flex justify-content-between">                 <span onClick={handleToggle}>                   <i                     className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}                     style={{ cursor: "pointer" }}                   ></i>                 </span>
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
                   برنج را به‌خوبی بشویید تا آب آن شفاف شود.
در یک قابلمه بزرگ، آب را به همراه ۱ قاشق غذاخوری نمک به جوش بیاورید.
برنج را در آب جوش ریخته و حدود ۱۰-۱۲ دقیقه بپزید تا کمی نرم شود (برنج نباید کاملاً پخته شود).
برنج را آبکش کنید و کنار بگذارید.در یک کاسه بزرگ، تخم‌مرغ را با ماست پرچرب، زعفران دم‌کرده، روغن مایع، نمک و فلفل سفید خوب مخلوط کنید.
سپس برنج آبکش شده را به این مخلوط اضافه کنید و به‌خوبی هم بزنید تا تمام برنج به مخلوط آغشته شود.کف قالب (قالب کیک یا قابلمه) را با کمی روغن چرب کنید.
مقداری از مایه ته چین را کف قالب بریزید و با قاشق فشار دهید تا فشرده شود.
اگر دوست دارید که در داخل ته چین گوشت یا مرغ داشته باشید، می‌توانید در این مرحله قطعات مرغ یا گوشت را در لایه‌ای از ته چین قرار دهید و سپس باقی‌مانده مایه ته چین را روی آن بریزید.
سطح مایه ته چین را صاف کنید.قالب را در فر از پیش گرم شده به دمای ۱۸۰ درجه سانتی‌گراد (۳۵۰ درجه فارنهایت) بگذارید و به مدت ۴۰-۵۰ دقیقه یا تا زمانی که سطح ته چین طلایی و برشته شود، بپزید.
در صورتی که از قابلمه برای پخت ته چین استفاده می‌کنید، قابلمه را روی حرارت کم قرار دهید و درب آن را ببندید. اجازه دهید ته چین برای حدود ۳۰ دقیقه تا یک ساعت بپزد تا ته آن برشته شود.بعد از پخت، ته چین را از فر یا قابلمه خارج کنید و اجازه دهید کمی خنک شود.
سپس آن را برگردانید و در قالب برش بزنید. ته چین قالبی شما آماده سرو است



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
             <WhitePepper />
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
