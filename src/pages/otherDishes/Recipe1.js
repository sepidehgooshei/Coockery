import React, { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import EggPlant from "../../components/property/EggPlant";
export default function Recipe1() {
 const[riceFoodItem,setRiceFoodItem] = useState(null);
 const[loading,setLoading] = useState(true);
 const[error,setError] = useState(null);
 const[open, setOpen] = useState(false);


  useEffect(()=>{
    async function fetchCookFoods(){
      try{
        const response = await fetch("http://localhost:9000/getToCookToMake");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json()
        setRiceFoodItem(data[0])

      }catch(error){
setError(error.message)
      }finally{
setLoading(false)
      }
    }
    fetchCookFoods()
  },[])
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
              <AsideLeft />
            </div>
          </div>

          <div className="col-8">
            {riceFoodItem && (
              <img
                src={riceFoodItem.image}
                alt={riceFoodItem.title}
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
                    className={`fa-solid ${
                      open ? "fa-minus" : "fa-plus"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
                <h3 className="mb-3">👇 👩‍🍳مواد لازم یتیمچه</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">پیاز : یک عدد بزرگ</p>
                  <p className="fs-6">بادمجان : ۲ عدد کوچک</p>
                  <p className="fs-6">گوجه فرنگی : ۲ عدد متوسط</p>
                  <p className="fs-6">سیر : ۴ حبه بزرگ</p>
                  <p className="fs-6">رب گوجه فرنگی : ۲ قاشق غذاخوری سرخالی</p>
                  <p className="fs-6">نمک : یک قاشق چای خوری</p>
                  <p className="fs-6">زردچوبه : یک قاشق چای خوری</p>
                  <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری</p>
                  <p className="fs-6">آب جوش : یک و نیم لیوان فرانسوی</p>
                  <h6> :طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                  پیاز را پوست کنده و نگینی خرد کنید.
بادمجان‌ها را پوست بگیرید و به صورت حلقه‌ای یا نگینی خرد کنید. می‌توانید آن‌ها را به مدت ۱۵ دقیقه در آب و نمک قرار دهید تا تلخی بادمجان‌ها گرفته شود.
گوجه‌ها را شسته و رنده کنید یا به صورت نگینی خرد کنید.
سیرها را ریز خرد یا له کنید.در یک قابلمه یا ماهیتابه بزرگ، مقداری روغن بریزید و روی حرارت متوسط قرار دهید.
پیازهای خرد شده را در روغن داغ ریخته و به‌طور کامل سرخ کنید تا طلایی شوند.
سیر خرد شده را به پیاز اضافه کنید و کمی دیگر سرخ کنید تا بوی سیر بلند شود.بادمجان‌های خرد شده را به قابلمه اضافه کنید و آن‌ها را در روغن تفت دهید تا کمی نرم شوند (حدود ۵-۱۰ دقیقه).
سپس گوجه‌های خرد شده یا رنده شده را به قابلمه اضافه کنید و با مواد دیگر مخلوط کنید.رب گوجه فرنگی را به مخلوط مواد اضافه کنید و کمی تفت دهید تا رنگ آن باز شود.
نمک، زردچوبه و فلفل سیاه را به مواد اضافه کرده و مخلوط کنید.آب جوش را به قابلمه اضافه کنید و مواد را هم بزنید.
حرارت را کم کنید و درب قابلمه را بگذارید.
اجازه دهید یتیمچه به مدت ۳۰ تا ۴۵ دقیقه بپزد و آب آن کشیده شود. اگر نیاز بود، در طول پخت کمی آب اضافه کنید تا مواد نسوزد.پس از پخت کامل، یتیمچه آماده است. آن را در ظرف مورد نظر سرو کنید
                
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
            <EggPlant/>
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
