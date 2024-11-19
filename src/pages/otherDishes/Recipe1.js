import React, { useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import { getToCookToMake } from "../../data/ToCook";
import Barberry from "../../components/property/Barberry";
const riceFoodItem= getToCookToMake[0]
export default function Recipe1() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
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
            {getToCookToMake.length > 0 && (
              <img
                src={getToCookToMake[0].image}
                alt={getToCookToMake[0].title}
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
                    پیاز ، سیب زمینی ، بادمجان و گوجه فرنگی حلقه ای خورد کنید ،
                    بادمجان ها و سیب زمینی سرخ کنید ، داخل تابه به ترتیب لایه اول
                    پیاز، لایه دوم سیب زمینی ، لایه سوم بادمجان و لایه آخر
                    گوجه فرنگی قرار بدید و سیر ها بین لایه ها قرار بذارید و سس
                    که ترکیب رب گوجه فرنگی ، نمک ، زردچوبه ، فلفل سیاه و آب جوش
                    درست کنید و روی مواد بریزید. در تابه بذارید و با شعله
                    متوسط بپزید، بعد از ۱۵ دقیقه شام شما آماده ست.
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
            <Barberry/>
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
