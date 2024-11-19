import React from "react";

function AsideLeft() {
    return(
          <div className="card-body">
              <div className="card-title">
                <span className="fw-bold text-end">دسته بندی</span>
                <span className="fw-lighter me-1">شف سجادی خوراک ها شام فوری</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span className="fw-lighter">ایرانی</span>
                <span className="fw-bold">ملیت</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span className="fw-lighter">آذر97</span>
                <span className="fw-bold">تاریخ انتشار</span>
              </div>
              <hr />
              <p className="mt-2 bg-light p-3 text-end shadow-lg p-3 mb-5 bg-body rounded lh-base">
                منبع تمام طرزتهیه ها و تصاویر در متن یا عکس ها ذکر شده است. در
                آموزش های ویدئویی اسم کامل سرآشپز یا کانال مربوطه ذکر شده است تا
                نقشی در معرفی بیشتر داشته باشیم
              </p>
            </div>
    )
}

export default AsideLeft