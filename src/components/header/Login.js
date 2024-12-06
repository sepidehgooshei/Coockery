
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("لطفا همه فیلدها را پر کنید");
      return;
    }

    if (!validateEmail(email)) {
      setError("آدرس ایمیل نامعتبر است");
      return;
    }

    navigate("/dashboard"); 
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center my-4">ورود</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">ایمیل:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">رمز عبور:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              ورود
            </button>
          </form>
          <p className="mt-3 text-center">
            حساب کاربری ندارید؟ <a href="/register">ثبت‌نام</a>
          </p>
        </div>
      </div>
    </div>
  );
}
