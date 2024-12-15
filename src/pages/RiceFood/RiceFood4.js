
import React, { useState, useEffect } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import Fish from "../../components/property/Fish";

export default function RiceFood4() {
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
        setRiceMeatItem(data[3]);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    }
    fetchRiceFood();
  }, []);

  function handleClick() {
    setOpen((prev) => !prev); 
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="container">
        {riceMeatItem && (
          <div className="text-end fw-light p-3">
            <h3 className="fw-normal">{riceMeatItem.name}</h3>
            <div className="mt-2">
              <span>{riceMeatItem.national}</span>
              <span>
                <i className="fa-solid fa-location-dot text-muted"></i>
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
            {riceMeatItem && riceMeatItem.image && (
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
                <span
                  onClick={handleClick}
                  className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                  style={{ cursor: "pointer" }}
                ></span>
                <h3 className="mb-3">👇 👩‍🍳 مواد لازم ماهی سوخاری رستورانی</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">آب لیمو :۳ قاشق غذاخوری</p>
                  <p className="fs-6">آب پیاز : یک عدد رنده شده</p>
                  <p className="fs-6">زعفران دم کرده : ۳ قاشق غذا خوری</p>
                  <p className="fs-6">سیر : ۳ حبه بزرگ</p>
                  <p className="fs-6">نمک : ۱ قاشق چای خوری</p>
                  <p className="fs-6">زردچوبه : ۱ قاشق چای خوری</p>
                  <p className="fs-6">زنجبیل : ۱ قاشق چای خوری</p>
                  <p className="fs-6">فلفل سیاه : نصف قاشق چای خوری ۱/۲</p>
                  <p className="fs-6"> : مواد لازم آرد سوخاری </p>
                  <p className="fs-6">آرد سفید : ۱۰۰ گرم</p>
                  <p className="fs-6">نمک : یک قاشق چای خوری</p>
                  <p className="fs-6">زردچوبه : یک قاشق مربا خوری</p>
                  <p className="fs-6">پودر سیر : یک قاشق چای خوری</p>
                  <h6>: طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                  ابتدا ماهی مورد نظر (ماهی سفید، قزل‌آلا یا هر نوع ماهی دیگر) را تمیز کرده و از پولک‌ها و استخوان‌های آن خلاص کنید.
                  ماهی را شسته و خشک کنید.در یک کاسه بزرگ، آب لیمو، آب پیاز، زعفران دم‌کرده، سیر رنده‌شده، نمک، زردچوبه، زنجبیل و فلفل سیاه را با هم مخلوط کنید.
ماهی‌ها را در این مخلوط قرار داده و خوب با دست یا قاشق ماساژ دهید تا تمام قسمت‌های ماهی به مواد ماریناد آغشته شود.
کاسه را بپوشانید و اجازه دهید ماهی‌ها حداقل ۳۰ دقیقه تا یک ساعت در یخچال استراحت کنند تا طعم‌ها به خورد ماهی بروند.در یک کاسه، آرد سفید را با نمک، زردچوبه و پودر سیر مخلوط کنید.
ماهی‌های مارینه‌شده را از کاسه خارج کرده و در مخلوط آرد سوخاری بغلتانید تا تمام سطح ماهی به آرد آغشته شود


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
            <Fish />
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
