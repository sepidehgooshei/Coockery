import React, { useEffect, useState } from "react";
import "../../pages/dashboard/dashboard.css";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import ReviewForm from "../../components/other/ReviewForm";
import Pistachio from "../../components/property/Pistachio";
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
        setRiceMeatItem(data[0]);
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
                  بتدا برنج را خوب شسته و در یک قابلمه با مقداری آب و نمک برای ۳۰ دقیقه تا یک ساعت خیس کنید.
                  پس از خیس خوردن، برنج را در قابلمه‌ای که به اندازه کافی آب جوش دارد، بریزید. در حین جوشیدن، به مدت ۱۰ دقیقه برنج را به طور متوسط بپزید تا نرم شود، سپس آبکش کنید.
                  مغز پسته‌ها را در یک تابه با مقداری روغن تفت دهید تا کمی طلایی شوند. مراقب باشید که پسته‌ها نسوزند. اگر دوست دارید کمی طعم تردتر داشته باشد، می‌توانید پسته‌ها را به صورت درشت خرد کنید.
                  به پسته‌های تفت داده شده، شوید خشک، زعفران دم کرده، نمک، فلفل سیاه و زردچوبه اضافه کنید و خوب هم بزنید تا همه مواد با هم مخلوط شوند.
                  در یک قابلمه، کمی روغن بریزید و ته قابلمه را چرب کنید.
لایه‌ای از برنج آبکش شده را کف قابلمه بریزید.
سپس مقداری از مخلوط پسته، شوید و زعفران را روی برنج بریزید.
این مراحل را به ترتیب (لایه برنج و مخلوط پسته) تا تمام شدن مواد تکرار کنید.
بعد از اینکه تمام مواد را در قابلمه ریختید، درب قابلمه را بگذارید و اجازه دهید تا برنج با حرارت کم بخار کند. برای این کار می‌توانید از روش دم کردن استفاده کنید.
به این صورت که حرارت را کم کرده و یک دم‌کنی یا پارچه تمیز روی در قابلمه بگذارید و درب آن را بپوشانید. اجازه دهید پسته پلو حدود ۳۰ تا ۴۵ دقیقه بخار کند تا برنج نرم و خوشمزه شود.
پس از پخت کامل، پسته پلو را به آرامی با قاشق مخلوط کنید تا پسته‌ها به طور یکنواخت با برنج ترکیب شوند.
این پلو معمولاً همراه با خورش یا گوشت و مرغ سرو می‌شود
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
            <Pistachio/>
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




