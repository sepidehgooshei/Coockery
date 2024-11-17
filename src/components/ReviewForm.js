import React from "react";
import StarRating from "../pages/StarRating ";
export default function ReviewForm({ food = {} }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-end">
      <div className="text-end m-3">
        <p className="fs-6">هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
        <p className="fs-6">
          اولین کسی باشید که دیدگاهی می نویسد “طرز تهیه {food.title} (شام فوری ۶)”
        </p>
        <p className="fs-6">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
        </p>
      </div>
      <StarRating/>
            <form className="m-3" onSubmit={handleSubmit}>
        <label htmlFor="comment" className="m-3">
          دیدگاه شما
        </label>
        <textarea
          id="comment"
          type="text"
          className="form-control shadow-none p-3 bg-light rounded"
        />

        <label htmlFor="name" className="m-3">
          <span className="text-dark me-1">*</span> نام
        </label>
        <input
          id="name"
          type="text"
          className="form-control shadow-none p-3 bg-light rounded"
        />

        <label htmlFor="email" className="m-3">
          <span className="text-dark me-1">*</span> ایمیل
        </label>
        <input
          id="email"
          type="email"
          className="form-control shadow-none p-3 mb-3 bg-light rounded"
        />

        <div className="form-check d-flex justify-content-center">
          <label htmlFor="saveInfo" className="form-check-label text-start">
            <small>ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم</small>
          </label>
          <input type="checkbox" id="saveInfo" className="form-check-input m-1 shadow-none mb-3 bg-light rounded" />

        </div>
        <button type="submit" className="btn btn-primary mt-5">ثبت</button>
      </form>
    </div>
  );
}

