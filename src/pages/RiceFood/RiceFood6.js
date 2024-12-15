import { useEffect, useState } from "react";
import AsideLeft from "../../components/other/AsideLeft";
import CardListFood from "../../components/other/CardListFood";
import FooterRazim from "../../components/other/FooterRazim";
import ReviewForm from "../../components/other/ReviewForm";
import Prawn from "../../components/property/prawn.js";

export default function RiceFood6() {
  const [open, setOpen] = useState(false);
  const [riceMeatItem, setRiceMeatItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRiceFood() {
      try {
        const response = await fetch("http://localhost:9000/RiceMeat");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRiceMeatItem(data[5]);
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
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-header d-flex justify-content-between align-items-center">
                <span onClick={handleToggle} style={{ cursor: "pointer" }}>
                  <i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} />
                </span>
                <h3 className="mb-0">👇 👩‍🍳 مواد لازم میگو سرخ شده</h3>
              </div>

              {open && (
                <div className="card-body shadow-none p-3 mb-5 bg-light rounded text-end">
                  <p className="fs-6"> میگو: ۳۰۰ گرم</p>
                  <p className="fs-6"> پیاز: یک عدد متوسط</p>
                  <p className="fs-6"> سیر: دو حبه </p>
                  <p className="fs-6"> نمک: یک قاشق چای خوری </p>
                  <p className="fs-6"> زردچوبه: یک قاشق چای خوری</p>
                  <p className="fs-6"> فلفل سیاه: 1/2 قاشق چای خوری </p>
                  <p className="fs-6"> پاپریکا: 1/2 قاشق چای خوری</p>
                  <p className="fs-6"> ادویه محلی جنوب: ۱ قاشق چای خوری</p>
<p>: طرز تهیه</p>
                  <p className="fs-6 lh-lg">
                    مقداری روغن در تابه بریزید (حدود ۲ تا ۳ قاشق غذاخوری) و
                    پیازهای خرد شده را داخل تابه بیاندازید. پیازها را تفت دهید
                    تا طلایی و نرم شوند. سپس سیر رنده شده را اضافه کرده و برای ۱
                    دقیقه دیگر تفت دهید تا عطر سیر آزاد شود. به پیاز و سیر تفت
                    داده شده، زردچوبه، فلفل سیاه، پاپریکا و ادویه محلی جنوب را
                    اضافه کنید. همه مواد را خوب هم بزنید تا ادویه‌ها به خوبی به
                    پیاز و سیر بچسبند. برای ۱ تا ۲ دقیقه دیگر اجازه دهید ادویه‌ها
                    به خوبی با مواد مخلوط شوند. حالا میگوهای تمیز شده را به تابه
                    اضافه کنید. میگوها را به مدت ۴ تا ۵ دقیقه تفت دهید. در این
                    مدت میگوها باید تغییر رنگ دهند و کمی قرمز شوند. می‌توانید از
                    یک قاشق نمک به میزان دلخواه نیز استفاده کنید. وقتی میگوها
                    کاملاً پخته و سرخ شدند، تابه را از روی حرارت بردارید. میگوها
                    را داخل ظرف سرو بریزید و در صورت تمایل با کمی لیمو ترش یا
                    سبزیجات تازه تزئین کنید. میگوهای سرخ شده شما آماده هستند.
                    می‌توانید این غذا را به همراه برنج یا نان سرو کنید. برای طعم
                    بهتر می‌توانید در انتها مقداری آبلیمو یا سس مخصوص روی میگوها
                    بریزید. می‌توانید از روغن زیتون به جای روغن معمولی استفاده
                    کنید تا طعم خاص‌تری به میگو بدهد.
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
            <Prawn />
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






