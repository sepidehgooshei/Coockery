import React, { useEffect, useState, useRef } from "react";
import "./AppSidebar.css";
import DishesLinks from "../../Links/DishesLinks"
export default function AppSidebar() {
  const [bar, setBar] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const barRef = useRef();
  function handleToggle(section) {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  }
  function handleClickClose() {
    setBar(false);
    setOpenSection(null);
  }
  const handleClick = () => {
    setBar((prev) => !prev);
    if (bar) {
      setOpenSection(null);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (barRef.current && !barRef.current.contains(event.target)) {
        setBar(false);
        setOpenSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [barRef]); 
  
  return (
    <div className="nav-item">
     <button 
  onClick={handleClick} 
  className="navbar-toggler bg-light"
  aria-expanded={bar}
>
  <span>
    <i className="fa-solid fa-bars text-dark me-1"></i>
    <span className="text-muted">دسته بندی ها</span>
  </span>
</button>
      <div
        ref={barRef}
        className={`sidebar ${bar ? "open" : ""}`}
        style={{ direction: "rtl" }}
      >
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-header d-flex justify-content-between">
            <span className="text-end"> دسته بندی ها </span>
            <span onClick={handleClickClose} style={{ cursor: "pointer" }}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
          <div className="card-body">
            <div>
              <div className="d-flex justify-content-between">
                <h3 className="ml-5 mb-1 fw-normal fs-6 text-muted">لیست غذا </h3>
                <span
                  onClick={() => handleToggle("mainDishes")}
                  style={{ cursor: "pointer" }}
                  className="me-5"
                >
                  <i
                    className={`fa-solid ${
                      openSection === "mainDishes" ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </span>
              </div>

              {openSection === "mainDishes" && (
                <div className="p-3">
 
<DishesLinks/>
                </div>
      
           )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




