
export default function Chicken() {
  return (
    <section className="card shadow p-3 mb-5 bg-body rounded text-end">
      <header className="card-header">
        <h6 className="m-3">خواص مرغ برای بدن</h6>
      </header>
      
      <article className="card-body">
        <h5 className="card-title">ارزش غذایی گوشت مرغ</h5>
        <img
          className="img-fluid"
          src="../../assets/skin/chicken.jpg"
          alt="مرغ"
        />
        <p className="lh-lg mt-3">
          گوشت مرغ به عنوان پرمصرف‌ترین گوشت‌ در سراسر جهان منبعی غنی از انواع ویتامین، پروتئین و مواد مغذی است. به همین دلیل نقش بسیاری در تامین آهن ضروری بدن، کلسیم، پتاسیم، فسفر، سلنیوم، ویتامین‌های گروه E، B و K خواهد داشت. ارزش غذایی این ماده پروتئینی به قدری زیاد است که دارای بیش از ۲۰ مورد خواص اثبات شده برای سلامتی و کنترل بیماری‌های مختلف است.
        </p>

        <section>
          <h6>برخی از خواص مرغ:</h6>
          <ul className="mt-2">
            <li className="list-group-item text-end text-muted">تقویت کننده سیستم ایمنی</li>
            <li className="list-group-item text-end text-muted">پیشگیری از انواع سرطان‌ها</li>
            <li className="list-group-item text-end text-muted">کمک به کاهش وزن و لاغری</li>
            <li className="list-group-item text-end text-muted">تقویت کننده چشم‌ها</li>
            <li className="list-group-item text-end text-muted">بهبود عملکرد سلول‌ها و بافت‌های بدن</li>
            <li className="list-group-item text-end text-muted">استحکام دندان‌ها و استخوان‌ها</li>
            <li className="list-group-item text-end text-muted">درمان کم‌خونی</li>
          </ul>
        </section>
      </article>
    </section>
  );
}



