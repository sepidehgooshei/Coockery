import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function FooterRazim() {
    return(
        <>
        <div className="col-md-3">
        <h5 className="m-3">دسترسی سریع</h5>
        <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-muted">درباره ما</a>  </li>
            <li><a href="#" className="text-decoration-none text-muted">تماس با ما</a></li>
            <li><a href="#" className="text-decoration-none text-muted"> بلاگ</a></li>
            <li><a href="#" className="text-muted text-decoration-none">سوالات متداول</a></li>        </ul>
        </div>
<div className="col-md-3">
    <h5 className="text-dark m-3 d-flex justify-content-end">دسته بندی</h5>
    <ul className="list-unstyled ">
    <li >
        <Link to="/RiceWithMeat" className="text-secondary text-decoration-none">انواع پلوها</Link>
    </li>
    <li>
        <Link to="/OtherDishes" className="text-secondary text-decoration-none" >سایر غذاها</Link>
    </li>
    <li>
        <Link to="/" className="text-decoration-none text-secondary">همه غذاها</Link>
    </li>
     <li>
        <a className="text-decoration-none text-secondary">پیش‌غذاها</a>
     </li>
     <li>
        <a className="text-decoration-none text-secondary">غذاهای گیاهی</a>
        
     </li>
    </ul>

</div>
<div className="col-md-3">
    <h5 className="m-3">ما را دنبال کنید</h5>
   <div className="d-flex">
    <a href="#"><img src="/assets/icon/instagram.webp" aria-label="Instagram" width="20px" height="20px" alt="instagram"/></a>
    <a href="#"><i className="fa-brands fa-telegram text-primary fs-5 mt-1 ms-2 "aria-label="Telegram"></i></a>
    <a href="#"><i className="fa-brands fa-youtube text-danger fs-5 mt-1 ms-2" aria-label="YouTube" ></i> </a>
   </div>
</div>
<div className="col-md-3">
<h5 className="m-3">عضویت در خبرنامه</h5>
<form className="d-flex flex-column">
<label htmlFor="email" className="visually-hidden">ایمیل شما</label>
<input type="email" id="email" placeholder="ایمیل شما" className="form-control mb-2"/>
<button type="submit" className="btn btn-warning">عضویت</button>

</form>


</div>

<div className="text-center py-3 mt-3 border-top border-secondary">
     <p className="text-muted ">© 2024 کلیه حقوق برای سایت آشپزی محفوظ است. </p></div>

   
        </>
        
    )
}
