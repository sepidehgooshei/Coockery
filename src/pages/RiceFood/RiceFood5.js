import { useState, useEffect } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import MushBeans from "../../components/property/MushBeans";

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
        setLoading(false); 
      }
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
                  onClick={handleToggle}
                  className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`}
                  style={{ cursor: "pointer" }}
                ></span>
                <h3 className="mb-3">👇 👩‍🍳 مواد لازم دمپختک دمی باقالی اصفهانی</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded">
                  <p className="fs-6">برنج ۴ پیمانه</p>
                  <p className="fs-6">باقالی زرد ۱٫۵ پیمانه</p>
                  <p className="fs-6">پیاز ۲ عدد متوسط</p>
                  <p className="fs-6">تخم مرغ ۲ عدد</p>
                  <p className="fs-6">آب ۴٫۵ پیمانه</p>
                  <p className="fs-6">کره ۵۰ گرم</p>
                  <p className="fs-6">نمک و فلفل سیاه به اندازه کافی</p>
                  <p className="fs-6">روغن و زردچوبه به اندازه کافی</p>
                  <h6>: طرز تهیه</h6>
                  <p className="fs-6 lh-lg">
                    در مرحله اول برای تهیه دمپختک ابتدا باقالی ها را به مدت دو
                    ساعت در یک ظرف آب می خیس می کنیم تا نرم گردند، برنج را هم
                    با توجه به نوع آن در یک ظرف دیگر با کمی نمک خیس می کنیم...
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
            <MushBeans />
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

