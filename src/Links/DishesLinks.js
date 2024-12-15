import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/other/CardListFood.css"
export default function DishesLinks() {
  const [mainDishes, setMainDishes] = useState([]); // برای ذخیره غذاهای اصلی
  const [otherDishes, setOtherDishes] = useState([]); // برای ذخیره غذاهای دیگر
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const [mainDishesResponse, otherDishesResponse] = await Promise.all([
          fetch("http://localhost:9000/RiceMeat"),
          fetch("http://localhost:9000/getToCookToMake")
        ]);

        if (!mainDishesResponse.ok || !otherDishesResponse.ok) {
          throw new Error("خطا در دریافت داده‌ها");
        }

        const mainDishesData = await mainDishesResponse.json();
        const otherDishesData = await otherDishesResponse.json();

        // بررسی صحت داده‌ها
        if (Array.isArray(mainDishesData)) {
          setMainDishes(mainDishesData);
        } else {
          throw new Error("داده‌های غذاهای اصلی معتبر نیستند.");
        }

        if (Array.isArray(otherDishesData)) {
          setOtherDishes(otherDishesData);
        } else {
          throw new Error("داده‌های غذاهای دیگر معتبر نیستند.");
        }
      } catch (error) {
        setError(error.message || "خطای ناشناخته");
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();
  }, []);

  if (loading) {
    return <div className="text-center text-muted">در حال بارگذاری...</div>; // نمایش پیغام در هنگام بارگذاری
  }

  if (error) {
    return <div className="text-center text-danger">خطا: {error}</div>; // نمایش خطا در صورت بروز مشکل
  }

  return (
    <div className="card-text">
      <span className="text-center justify-content-center d-flex m-3">لیست غذاها</span>
      
      {/* لیست غذاهای اصلی */}
      <div>
        <h3 className="text-end">غذاهای اصلی</h3>
        <ul>
          {mainDishes.map((dish) => (
            <li className="text-end list-unstyled px-3" key={dish.id}>
              <Link className="no-decoration" to={dish.path || "#"}>
                <span
                  className="rice-size"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title={dish.tiTip}
                >
                  {dish.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* لیست غذاهای دیگر */}
      <div>
        <h3 className="text-end">غذاهای دیگر</h3>
        <ul>
          {otherDishes.map((dish) => (
            <li className="text-end list-unstyled px-3" key={dish.id}>
              <Link className="no-decoration" to={dish.path || "#"}>
                <span
                  className="rice-size"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title={dish.tiTip}
                >
                  {dish.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
