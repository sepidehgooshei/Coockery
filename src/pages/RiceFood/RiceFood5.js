import { useState, useEffect } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import FriedEggplant from "../../components/property/FriedEggplant";

export default function RiceFood5() {
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const [open, setOpen] = useState(false); 
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
        setRiceMeatItem(data[4]);
      } catch (error) {
        setError(error.message); 
      }
      setLoading(false); 
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
                loading="lazy"   
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
            <div className="card shadow-lg p-3 mb-5 bg-body rounded text-end text-dark">
              <div className="card-header d-flex justify-content-between align-items-center">
                <span
                  onClick={handleToggle}
                  className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                  style={{ cursor: "pointer" }}
                ></span>
                <h3 className="mb-0">👇 👩‍🍳 مواد لازم دمپختک دمی باقالی اصفهانی</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <div className="fs-6 mb-3">
                    <p className="fs-6">برنج: ۴ پیمانه</p>
                    <p className="fs-6">باقالی زرد: ۱٫۵ پیمانه</p>
                    <p className="fs-6">پیاز: ۲ عدد متوسط</p>
                    <p className="fs-6">تخم مرغ: ۲ عدد</p>
                    <p className="fs-6">آب: ۴٫۵ پیمانه</p>
                    <p className="fs-6">کره: ۵۰ گرم</p>
                    <p className="fs-6">نمک و فلفل سیاه: به اندازه کافی</p>
                    <p className="fs-6">روغن و زردچوبه: به اندازه کافی</p>
                  </div>

                  <h6 className="fw-bold">: طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                    برنج را شسته و به مدت ۳۰ دقیقه در آب و نمک بخیسانید.
                    باقالی‌ها را در آب جوش انداخته و حدود ۵ دقیقه بپزید تا کمی نرم شوند (در صورت استفاده از باقالی خشک، آن را از شب قبل در آب بخیسانید).
                    پیازها را خرد کنید.
                    در یک قابلمه، کمی روغن بریزید و پیازهای خرد شده را داخل آن تفت دهید تا طلایی شوند.
                    سپس زردچوبه را به پیاز اضافه کنید و برای ۱ دقیقه دیگر تفت دهید تا عطر آن آزاد شود.
                    باقالی‌ها را به پیازهای تفت داده شده اضافه کنید و برای چند دقیقه با پیازها تفت دهید تا طعم‌ها به خوبی با هم ترکیب شوند.
                    برنج خیسانده شده را به قابلمه اضافه کنید و کمی تفت دهید.
                    سپس آب را به قابلمه اضافه کنید، نمک و فلفل سیاه را به اندازه کافی بریزید و اجازه دهید که آب به جوش بیاید.
                    وقتی آب جوشید، حرارت را کم کنید و در قابلمه را بگذارید تا برنج به طور کامل دم بکشد. این مرحله حدود ۴۰ دقیقه زمان می‌برد.
                    در یک تابه کوچک، کره را ذوب کرده و تخم‌مرغ‌ها را در آن بشکنید. تخم‌مرغ‌ها را به صورت نیمرو پخته و سپس در پایان به دمپختک اضافه کنید.
                    بعد از اینکه برنج دم کشید و آب آن تبخیر شد، تخم‌مرغ‌ها را روی دمپختک قرار دهید و در قابلمه را بگذارید تا دمپختک برای ۵ دقیقه دیگر دم بکشد
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
            <FriedEggplant />
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
