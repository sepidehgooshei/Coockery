
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import "../dashboard/dashboard.css";
import FooterRazim from '../../components/other/FooterRazim';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export default function OtherDishes() {
  const { showScrollButton, scrollToTop } = useScrollToTop();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch("http://localhost:9000/getToCookToMake");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchFoods();

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {foods.map((food, index) => (
            <div className="col" key={index}>
              <div className="card h-100 position-relative">
                <div className="image-container">
                  <img
                    style={{ height: '300px', width: '500px', objectFit: 'cover' }}
                    src={food.image}
                    className="card-img-top img-fluid"
                    alt={food.name}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={food.tiTip}
                  />
                  <div className='gray-bg'>{food.national}</div>
                </div>
                <div className="card-body">
                  <Link to={food.path} className="text-dark text-decoration-none">
                    <h5 className="card-title fw-normal text-decor">{food.name}</h5>
                    <p className="card-text">{food.time}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showScrollButton && (
        <button onClick={scrollToTop} className="btn btn-primary" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          بالا
        </button>
      )}
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

