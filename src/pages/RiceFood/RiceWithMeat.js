
import React, { useEffect, useState } from 'react';
import "../../pages/dashboard/dashboard.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FooterRazim from '../../components/other/FooterRazim';

export default function RiceWithMeat() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch("http://localhost:9000/RiceMeat");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFoods();

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  if (loading) {
    return <div className="text-center mt-5">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">خطا: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {foods.map((food) => (
            <div className="col" key={food.id}>
              <div className="card h-100 position-relative">
                <div className="img-container">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="card-img-top img-fluid"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={food.tiTip}
                    style={{ height: '300px', width: '500px', objectFit: 'cover' }}
                  />
                  <div className="gray-bg">{food.national}</div>
                  <div className="card-body">
                    <Link to={food.path} className="text-dark text-decoration-none">
                      <h5 className="card-title fw-normal text-decor">{food.name}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

